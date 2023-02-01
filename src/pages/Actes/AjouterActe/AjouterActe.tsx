import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { GET_SPECIALITIES } from '../../../hooks/Specialities/useSpecialities'
import { useTranslation } from 'react-i18next'
import { CREATE_ACTE } from './ActeMutation'
import { GET_ACTS } from '../../../hooks/Actes/useActes'



const AjouterActe = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    };

    const { t } = useTranslation()

    const { data: dataS, loading: loadingS, error: errorS } = useQuery(GET_SPECIALITIES)

    const [descriptionFr, setDescriptionFr] = useState('');
    const [descriptionEn, setDescriptionEn] = useState('');
    const [specialityIds, setSpecialityIds] = useState('');
    const [partakerIds, setPartakerIds] = useState('');
    const [value, setValue] = useState('');
    const [specialities, setSpecialities] = useState<[]>([])

    useEffect(() => {
        setSpecialities(dataS?.specialities)

    }, [dataS])

    const [createAct] = useMutation(CREATE_ACTE, {
        variables: {
            value: Number(value), specialityIds: Number(specialityIds), partakerIds: Number(partakerIds), descriptionFr: descriptionFr,
            descriptionEn: descriptionEn
        },
        update(cache, { data: { createAct } }) {
            const { acts }: any = cache.readQuery({ query: GET_ACTS })

            cache.writeQuery({
                query: GET_ACTS,
                data: { acts: [...acts, createAct] },
            })
        }
    })

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (descriptionFr === '' || descriptionEn === '' || specialityIds === '' || partakerIds === '' || value === '') {
            return alert('Merci de remplir tous les champs');
        }

        createAct({ descriptionFr, descriptionEn, specialityIds, partakerIds, value } as any)
        navigate('/actes')
        setValue('')
        setSpecialityIds('')
        setDescriptionFr('')
        setDescriptionEn('')
        setPartakerIds('')
    }

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterType-container'>
                    <h2>{t('ajouterActe')}
                        <button className='back' onClick={goBack}>Retour</button>
                    </h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='controls'>
                                <div>
                                    <input id='descriptionFr' value={descriptionFr} onChange={(e) => { setDescriptionFr(e.target.value) }} type="text" className='input' placeholder='Description fr *' required />
                                </div><br />
                                <div>
                                    <input id='descriptionEn' value={descriptionEn} onChange={(e) => { setDescriptionEn(e.target.value) }} type="text" className='input' placeholder='Description en *' required />
                                </div><br />
                                <div>
                                    <select id='specialityIds' value={specialityIds} onChange={(e) => { setSpecialityIds(e.target.value) }} className='input' placeholder='*' required>
                                        <option>{t('selectSpec')}</option>
                                        {
                                            specialities?.map((el: any) => (
                                                <option key={el.id} value={el.id}>{el.description?.fr}</option>
                                            ))
                                        }
                                    </select>
                                </div><br />
                                <div>
                                    <label htmlFor="">{t('prix1')}</label>
                                    <input id='value' value={value} onChange={(e) => { setValue(e.target.value) }} type="text" className='input' placeholder='' />
                                </div>
                                <div>
                                    <label htmlFor="">{t('prix2')}</label>
                                    <input id='partakerIds' value={partakerIds} onChange={(e) => { setPartakerIds(e.target.value) }} type="text" className='input' placeholder='' />
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

export default AjouterActe
