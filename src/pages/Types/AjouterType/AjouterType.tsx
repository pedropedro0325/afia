import React, { useState } from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import './ajouterType.scss'
import { useMutation } from '@apollo/client'
import { CREATE_TYPE } from './TypeMutation'
import { GET_TYPES } from '../../../hooks/Types/useTypes'
import { useTranslation } from 'react-i18next'

const AjouterType = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    };

    const { t } = useTranslation()

    const [description, setDescription] = useState("")
    const [createPartakerType] = useMutation(CREATE_TYPE, {
        variables: { description },
        update(cache, { data: { createPartakerType } }) {
            const { partakerTypes }: any = cache.readQuery({ query: GET_TYPES })

            cache.writeQuery({
                query: GET_TYPES,
                data: { partakerTypes: [...partakerTypes, createPartakerType] },
            })
        }
    })

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (description === '') {
            return alert('Merci de remplir tous les champs');
        }

        createPartakerType(description as any)
        navigate('/postes')
        setDescription('')
    }

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterType-container'>
                    <h2>{t('ajouterPoste')}
                        <button className='back' onClick={goBack}>Retour</button>
                    </h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='controls'>
                                <div>
                                    <input value={description} onChange={(e) => { setDescription(e.target.value) }} type="text" className='input' placeholder='Description*' />
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

export default AjouterType
