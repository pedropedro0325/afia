import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'

const CREATE_TYPE_VENUE = gql`
    mutation CreateEvent($description: String) {
  createVenueType(description: $description) {
    description
  }
}
`

const AjouterTypeSalle = () => {

    const [description, setDescription] = useState<string>('')

    const [createVenueType, { data, loading, error }] = useMutation(CREATE_TYPE_VENUE)

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterType-container'>
                    <h2>Ajouter une type de salle</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={e => {
                            e.preventDefault()
                            createVenueType({ variables: { description: description } })
                            if (!error) {
                                setDescription('')
                            }
                        }}>
                            <div className='controls'>
                                <div>
                                    <input value={description} onChange={(e) => { setDescription(e.target.value) }} type="text" className='input' placeholder='Description*' />
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

export default AjouterTypeSalle
