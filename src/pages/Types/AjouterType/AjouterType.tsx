import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './ajouterType.scss'
import { gql, useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'

const CREATE_TYPE = gql`
    mutation CreatePartakerType($description: String!) {
        createPartakerType(description: $description) {
            id
            description
  }
}
`

const AjouterType = () => {

    const navigate = useNavigate()

    const { t } = useTranslation()

    const [description, setDescription] = useState<string>('')
    const [createPartakerType, { data, loading, error }] = useMutation(CREATE_TYPE)

    if (loading) return 'Soumission...'

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterType-container'>
                    <h2>{t('ajouterPoste')}</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={e => {
                            e.preventDefault()
                            try {
                                createPartakerType({ variables: { description: description } })
                                if (!error) {
                                    setDescription('')
                                }
                                navigate('/postes')
                                window.location.reload()
                            }
                            catch (error: any) {
                                if (error) return `Submission error! ${error.message}`
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

export default AjouterType
