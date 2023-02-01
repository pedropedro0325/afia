import React, { useState } from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { CREATE_TYPE_VENUE } from './TypeSalleMutation'
import { GET_VENUESTYPES } from '../../../hooks/TypeSalles/useTypeSalles'


const AjouterTypeSalle = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    };

    const { t } = useTranslation()

    const [description, setDescription] = useState<string>('')

    const [createVenueType] = useMutation(CREATE_TYPE_VENUE, {
        variables: {
            description
        },
        update(cache, { data: { createVenueType } }) {
            const { venueTypes }: any = cache.readQuery({ query: GET_VENUESTYPES })

            cache.writeQuery({
                query: GET_VENUESTYPES,
                data: { venueTypes: [...venueTypes, createVenueType] },
            })
        }
    })

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (description === '') {
            return alert('Merci de remplir tous les champs');
        }

        createVenueType({ description } as any)
        navigate('/salles/types')
        setDescription('')
    }

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterType-container'>
                    <h2>{t('ajouterTypeSalle')}
                        <button className='back' onClick={goBack}>Retour</button>
                    </h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='controls'>
                                <div>
                                    <input value={description} onChange={(e) => { setDescription(e.target.value) }} type="text" className='input' placeholder='Description*' required />
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

export default AjouterTypeSalle
