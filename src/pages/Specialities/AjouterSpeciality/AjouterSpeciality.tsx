import React, { useState } from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import './ajouterSpeciality.scss'
import { useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { CREATE_SPECIALITY } from './SpecialityMutation'
import { GET_SPECIALITIES } from '../../../hooks/Specialities/useSpecialities'



const AjouterSpeciality = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    };

    const { t } = useTranslation()

    const [descriptionFr, setDescriptionFr] = useState('')
    const [descriptionEn, setDescriptionEn] = useState('')

    const [createSpeciality] = useMutation(CREATE_SPECIALITY, {
        variables: { descriptionFr, descriptionEn },
        update(cache, { data: { createSpeciality } }) {
            const { specialities }: any = cache.readQuery({ query: GET_SPECIALITIES })

            cache.writeQuery({
                query: GET_SPECIALITIES,
                data: { specialities: [...specialities, createSpeciality] },
            })
        }
    })

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (descriptionFr === '' || descriptionEn === '') {
            return alert('Merci de remplir tous les champs');
        }

        createSpeciality({ descriptionFr, descriptionEn } as any)
        navigate('/specialites')
        setDescriptionFr('')
        setDescriptionEn('')
    }


    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterSpeciality-container'>
                    <h2>{t('ajouterSpec')}
                        <button className='back' onClick={goBack}>Retour</button>
                    </h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='controls'>
                                <div>
                                    <input value={descriptionFr} onChange={(e) => { setDescriptionFr(e.target.value) }} type="text" className='input' placeholder='Description Fr*' required />
                                </div><br />
                                <div>
                                    <input value={descriptionEn} onChange={(e) => { setDescriptionEn(e.target.value) }} type="text" className='input' placeholder='Description En*' required />
                                </div>
                            </div>
                            <div className='save'>
                                <div>
                                    <button type='submit' className='btn-save'>{t('save')}</button>
                                </div>
                                <div>
                                    <button className='btn-cancel'>{t('annuler')}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AjouterSpeciality
