import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import { useVenuesTypes } from '../../../hooks/TypeSalles/useTypeSalles'
import { useForm } from '../../../utils/hooks'
import './ajouterSalle.scss'
import { useTranslation } from 'react-i18next'

const CREATE_VENUE = gql`
    mutation CreateEvent($venueTypeId: Int, $phoneNumber: String, $description: String) {
  createVenue(venueTypeId: $venueTypeId, phoneNumber: $phoneNumber, description: $description) {
    venueType
        {
            id
            description
        }
        phoneNumber
        description
  }
}
`

const AjouterSalle = () => {

    const navigate = useNavigate()

    const { t } = useTranslation()

    const [createVenue, { data, loading, error }] = useMutation(CREATE_VENUE)

    const [initialState, setReportValues] = useState({
        description: "",
        venueTypeId: "",
        phoneNumber: ""
    });



    const { data: dataV } = useVenuesTypes()

    const { onChange, onChangeOption, onSubmit, values } = useForm(
        formCallback,
        initialState
    );

    async function formCallback() {

        try {
            const valuesCallBack: any = values
            // send "values" to database
            console.log("=================", values)
            createVenue({
                variables: {
                    venueTypeId: Number(valuesCallBack.venueTypeId), phoneNumber: valuesCallBack.phoneNumber, description: valuesCallBack.description
                }
            })
            if (!error) {
                valuesCallBack.venueTypeId = 0
                valuesCallBack.phoneNumber = ''
                valuesCallBack.description = ''
            }
            navigate('/salles')
        }
        catch (error: any) {
            if (error) return `
            Erreur de soumission ! ${error.message}`
        }
    }

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterType-container'>
                    <h2>{t('ajouterSalle')}</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='controls'>
                                <div>
                                    <input name="description" onChange={onChange} type="text" className='input' placeholder='Description*' required />
                                </div><br />
                                <div>
                                    <select name="venueTypeId" onChange={onChangeOption} className='input' placeholder='Type de salle*' required>
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
                                    <input name="phoneNumber" onChange={onChange} type="text" className='input' placeholder='*' required />
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
