import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './ajouterSpeciality.scss'
import { gql, useMutation } from '@apollo/client'

const CREATE_SPECIALITY = gql`
    mutation CreateSpeciality($description: String) {
  createSpeciality(description: $description) {
    id
    description {
      fr
      en
    }
  }
}
`

const AjouterSpeciality = () => {

    const [createSpeciality, { loading, error }] = useMutation(CREATE_SPECIALITY)

    const [description, setDescription] = useState<string>('')

    if (loading) return 'Submitting...'
    if (error) return `Submission error! ${error.message}`

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterSpeciality-container'>
                    <h2>Ajouter une spécialité</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={e => {
                            e.preventDefault()
                            createSpeciality({ variables: { description: description } })
                            if (error) {
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

export default AjouterSpeciality
