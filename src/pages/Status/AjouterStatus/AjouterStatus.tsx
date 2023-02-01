import React, { useState } from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { CREATE_STATUS } from './StatusMutation'
import { GET_STATUS } from '../../../hooks/Status/useStatus'

const AjouterStatus = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    };

    const { t } = useTranslation()

    const [descriptionFr, setDescriptionFr] = useState('')
    const [descriptionEn, setDescriptionEn] = useState('')
    const [typeId, setTypeId] = useState('')

    const [createStatus] = useMutation(CREATE_STATUS, {
        variables: { descriptionFr, descriptionEn, typeId: Number(typeId) },
        update(cache, { data: { createStatus } }) {
            const { manyStatus }: any = cache.readQuery({ query: GET_STATUS })

            cache.writeQuery({
                query: GET_STATUS,
                data: { manyStatus: [...manyStatus, createStatus] },
            })
        }
    })

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (descriptionFr === '' || descriptionEn === '' || typeId === '') {
            return alert('Merci de remplir tous les champs');
        }

        createStatus({ descriptionFr, descriptionEn, typeId } as any)
        navigate('/status')
        setDescriptionFr('')
        setDescriptionEn('')
        setTypeId('')
    }

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterSpeciality-container'>
                    <h2>{t('ajouterStatut')}
                        <button className='back' onClick={goBack}>Retour</button>
                    </h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='controls'>
                                <div>
                                    <input value={descriptionFr} onChange={(e) => { setDescriptionFr(e.target.value) }} type="text" className='input' placeholder='Description FR*' required />
                                </div><br />
                                <div>
                                    <input value={descriptionEn} onChange={(e) => { setDescriptionEn(e.target.value) }} type="text" className='input' placeholder='Description EN*' required />
                                </div><br />
                                <div>
                                    <input value={typeId} onChange={(e) => { setTypeId(e.target.value) }} type="text" className='input' placeholder='type*' required />
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

export default AjouterStatus
