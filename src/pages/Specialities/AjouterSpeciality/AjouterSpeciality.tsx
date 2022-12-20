import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './ajouterSpeciality.scss'
import { gql, useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'

const CREATE_SPECIALITY = gql`
    mutation Mutation($descriptionFr: String, $descriptionEn: String) {
  createSpeciality(descriptionFR: $descriptionFr, descriptionEN: $descriptionEn) {
    id
    description {
      fr
      en
    }
  }
}
`

const AjouterSpeciality = () => {

    const navigate = useNavigate()

    const { t } = useTranslation()

    const [createSpeciality, { loading, error }] = useMutation(CREATE_SPECIALITY)

    const [descriptionFr, setDescriptionFr] = useState<string>('')
    const [descriptionEn, setDescriptionEn] = useState<string>('')

    if (loading) return 'Submitting...'
    if (error) return `Submission error! ${error.message}`


    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterSpeciality-container'>
                    <h2>{t('ajouterSpec')}</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={e => {
                            e.preventDefault()
                            try {
                                createSpeciality({ variables: { descriptionFr: descriptionFr, descriptionEn: descriptionEn } })
                                if (error) {
                                    setDescriptionFr('')
                                    setDescriptionEn('')
                                }
                                navigate('/specialites')
                            }
                            catch (error: any) {
                                alert(error)
                            }
                        }}>
                            <div className='controls'>
                                <div>
                                    <input value={descriptionFr} onChange={(e) => { setDescriptionFr(e.target.value) }} type="text" className='input' placeholder='Description Fr*' required />
                                </div><br />
                                <div>
                                    <input value={descriptionEn} onChange={(e) => { setDescriptionEn(e.target.value) }} type="text" className='input' placeholder='Description En*' required />
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

export default AjouterSpeciality
