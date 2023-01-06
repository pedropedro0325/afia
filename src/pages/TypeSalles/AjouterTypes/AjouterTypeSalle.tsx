import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'

const CREATE_TYPE_VENUE = gql`
    mutation CreateEvent($description: String) {
  createVenueType(description: $description) {
    description
  }
}
`

const AjouterTypeSalle = () => {

    const navigate = useNavigate()

    const { t } = useTranslation()

    const [description, setDescription] = useState<string>('')

    const [createVenueType, { data, loading, error }] = useMutation(CREATE_TYPE_VENUE)

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterType-container'>
                    <h2>{t('ajouterTypeSalle')}</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={e => {
                            e.preventDefault()

                            try {
                                createVenueType({ variables: { description: description } })
                                if (!error) {
                                    setDescription('')
                                }
                                navigate('/salle/types')
                                window.location.reload()
                            }
                            catch (error: any) {
                                if (error) return `
                                Erreur de soumission ! ${error.message}`
                            }
                        }}>
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
