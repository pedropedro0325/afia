import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './ajouterType.scss'
import { gql, useMutation } from '@apollo/client'

const CREATE_TYPE = gql`
    mutation CreatePartakerType($description: String!) {
        createPartakerType(description: $description) {
            id
            description
  }
}
`

const AjouterType = () => {

    const [description, setDescription] = useState<string>('')
    const [createPartakerType, { data, loading, error }] = useMutation(CREATE_TYPE)

    if (loading) return 'Submitting...'
    if (error) return `Submission error! ${error.message}`

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterType-container'>
                    <h2>Ajouter un type</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={e => {
                            e.preventDefault()
                            createPartakerType({ variables: { description: description } })
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

export default AjouterType
