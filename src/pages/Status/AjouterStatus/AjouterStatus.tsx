import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'

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

    const navigate = useNavigate()

    const { t } = useTranslation()

    const [createStatus, { loading, error }] = useMutation(CREATE_STATUS)

    const [descriptionFr, setDescriptionFr] = useState<string>('')
    const [descriptionEn, setDescriptionEn] = useState<string>('')

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterSpeciality-container'>
                    <h2>{t('ajouterStatut')}</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={e => {
                            e.preventDefault()

                            try {
                                createStatus({ variables: { descriptionFr: descriptionFr, descriptionEn: descriptionEn } })
                                if (error) {
                                    setDescriptionFr('')
                                    setDescriptionEn('')
                                }
                                navigate('/status')
                            }
                            catch (error: any) {
                                if (error) return `
                                Erreur de soumission ! ${error.message}`
                            }
                        }}>
                            <div className='controls'>
                                <div>
                                    <input value={descriptionFr} onChange={(e) => { setDescriptionFr(e.target.value) }} type="text" className='input' placeholder='Description FR*' required />
                                </div><br />
                                <div>
                                    <input value={descriptionEn} onChange={(e) => { setDescriptionEn(e.target.value) }} type="text" className='input' placeholder='Description EN*' required />
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

export default AjouterStatus
