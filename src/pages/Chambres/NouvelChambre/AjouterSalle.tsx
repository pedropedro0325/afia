import React, { useState } from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_VENUE } from './SalleMutation'
import { GET_VENUESTYPES } from '../../../hooks/TypeSalles/useTypeSalles'
import './ajouterSalle.scss'
import { useTranslation } from 'react-i18next'
import { GET_VENUES } from '../../../hooks/Venues/useVenues'



const AjouterSalle = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    };

    const { t } = useTranslation()

    const [description, setDescription] = useState('')
    const [venueTypeId, setVenueTypeId] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const { data: dataV } = useQuery(GET_VENUESTYPES)

    const [createVenue] = useMutation(CREATE_VENUE, {
        variables: {
            description, venueTypeId: Number(venueTypeId), phoneNumber
        },
        update(cache, { data: { createVenue } }) {
            const { venues }: any = cache.readQuery({ query: GET_VENUES })

            cache.writeQuery({
                query: GET_VENUES,
                data: { venues: [...venues, createVenue] },
            })
        }
    })

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (description === '' || venueTypeId === '' || phoneNumber === '') {
            return alert('Merci de remplir tous les champs');
        }

        createVenue({ description, venueTypeId, phoneNumber } as any)
        navigate('/salles')
        setDescription('')
        setVenueTypeId('')
        setPhoneNumber('')
    }

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterType-container'>
                    <h2>{t('ajouterSalle')}
                        <button className='back' onClick={goBack}>Retour</button>
                    </h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='controls'>
                                <div>
                                    <input value={description} onChange={(e) => { setDescription(e.target.value) }} type="text" className='input' placeholder='Description*' required />
                                </div><br />
                                <div>
                                    <select value={venueTypeId} onChange={(e) => { setVenueTypeId(e.target.value) }} className='input' placeholder='Type de salle*' required>
                                        <option>{t('selectTypeSalle')}</option>
                                        {
                                            dataV?.venueTypes.map((el: any) => (
                                                <option key={el.id} value={el.id}>{el.description}</option>
                                            ))
                                        }
                                    </select>
                                </div><br />
                                <div>
                                    <label htmlFor="">{t('nTel')}</label>
                                    <input value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} type="text" className='input' placeholder='*' required />
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

export default AjouterSalle
