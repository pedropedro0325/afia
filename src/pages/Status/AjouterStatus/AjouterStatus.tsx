import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'

const CREATE_STATUS = gql`
   mutation Mutation($descriptionFr: String, $descriptionEn: String) {
  createStatus(descriptionFR: $descriptionFr, descriptionEN: $descriptionEn) {
    id
    description {
      fr
      en
    }
  }
}
`

const AjouterStatus = () => {

    const [createStatus, { loading, error }] = useMutation(CREATE_STATUS)

    const [descriptionFr, setDescriptionFr] = useState<string>('')
    const [descriptionEn, setDescriptionEn] = useState<string>('')

    if (loading) return 'Submitting...'
    if (error) return `Submission error! ${error.message}`

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterSpeciality-container'>
                    <h2>Ajouter une statut</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={e => {
                            e.preventDefault()
                            createStatus({ variables: { descriptionFr: descriptionFr, descriptionEn: descriptionEn } })
                            if (error) {
                                setDescriptionFr('')
                                setDescriptionEn('')
                            }
                        }}>
                            <div className='controls'>
                                <div>
                                    <input value={descriptionFr} onChange={(e) => { setDescriptionFr(e.target.value) }} type="text" className='input' placeholder='Description FR*' />
                                </div><br />
                                <div>
                                    <input value={descriptionEn} onChange={(e) => { setDescriptionEn(e.target.value) }} type="text" className='input' placeholder='Description EN*' />
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
