import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import { useVenuesTypes } from '../../../hooks/TypeSalles/useTypeSalles'
import { useForm } from '../../../utils/hooks'
import './ajouterSalle.scss'

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

    // if (loading) return <div>...loading</div>
    // if (error) return <div>something went wrong</div>

    async function formCallback() {
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
    }

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterType-container'>
                    <h2>Ajouter une salle</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='controls'>
                                <div>
                                    <input name="description" onChange={onChange} type="text" className='input' placeholder='Description*' />
                                </div><br />
                                <div>
                                    <select name="venueTypeId" onChange={onChangeOption} className='input' placeholder='Type de salle*'>
                                        <option>Choisir un type de salle</option>
                                        {
                                            dataV?.venueTypes.map((el: any) => (
                                                <option key={el.id} value={el.id}>{el.description}</option>
                                            ))
                                        }
                                    </select>
                                </div><br />
                                <div>
                                    <input name="phoneNumber" onChange={onChange} type="text" className='input' placeholder='N° de téléphone*' />
                                </div>
                            </div>
                            <div className='save'>
                                <div>
                                    <button type='submit' className='btn-save'>Enrégistrer</button>
                                </div>
                                <div>
                                    <button className='btn-cancel'>Annuler</button>
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
