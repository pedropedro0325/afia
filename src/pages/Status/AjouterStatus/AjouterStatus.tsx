import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'

const CREATE_STATUS = gql`
   mutation Mutation($description: String) {
  createStatus(description: $description) {
    id
    description
  }
}
`

const AjouterStatus = () => {

    const [createStatus, { loading, error }] = useMutation(CREATE_STATUS)

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
                            createStatus({ variables: { description: description } })
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

export default AjouterStatus
