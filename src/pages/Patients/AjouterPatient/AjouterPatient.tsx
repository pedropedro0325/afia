import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './ajouterPatient.scss'
import { gql, useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'

const CREATE_PATIENT = gql`
    mutation CreatePatient($name: String, $lastName: String, $birthDate: String, $birthCityId: String, $adressId: String, $phoneNumber: String, $email: String, $description: String) {
  createPatient(name: $name, lastName: $lastName, birthDate: $birthDate, birthCityId: $birthCityId, adressId: $adressId, phoneNumber: $phoneNumber, email: $email, description: $description) {
    id
    name
    lastName
    birthDate
    birthCityId
    adressId
    phoneNumber
    email
    description
  }
}
`

const AjouterPatient = () => {

    const navigate = useNavigate()

    const { t } = useTranslation()

    let name: any, lastName: any, birthDate: any, birthCityId: any, adressId: any, phoneNumber: any, email: any, description: any
    const [createPatient, { error, loading }] = useMutation(CREATE_PATIENT)

    if (loading) return 'Soumission...'
    if (error) return `
    Erreur de soumission ! ${error.message}`

    return (
        <div className='home-container'>
            <Outlet />
            <div className='add-patient'>
                <h2>{t('ajouterPatient')}</h2>
                <div className='form'>
                    <form onSubmit={e => {
                        e.preventDefault()

                        try {
                            createPatient({ variables: { name: name.value, lastName: lastName.value, birthDate: birthDate.value, birthCityId: birthCityId.value, adressId: adressId.value, phoneNumber: phoneNumber.value, email: email.value, description: description.value } })
                            navigate('/patients')
                            window.location.reload()
                        }
                        catch (error: any) {
                            return `
                            Erreur de soumission ! ${error.message}`
                        }
                    }}>
                        <div className='form-top'>
                            <div className='card identite'>
                                <h3>{t('identite')}</h3>
                                <div className='control'>
                                    <label>{t('prenom')}</label><br />
                                    <input ref={node => { lastName = node }} type="text" required />
                                </div>
                                <div className='control'>
                                    <label>{t('nom')}</label><br />
                                    <input ref={node => { name = node }} type="text" required />
                                </div>
                            </div>
                            <div className='card adresse'>
                                <h3>{t('adrePers')}</h3>
                                <div className='control'>
                                    <label>{t('adresse')}</label><br />
                                    <input ref={node => { adressId = node }} type="text" required />
                                </div>
                                <div className='control'>
                                    <label>{t('tel')}</label><br />
                                    <input ref={node => { phoneNumber = node }} type="text" required />
                                </div>
                            </div>
                        </div>
                        <div className='form-bottom'>
                            <div className='card etat-civil'>
                                <h3>{t('etatCivil')}</h3>
                                <div className='control'>
                                    <label>{t('dateNaiss')}</label><br />
                                    <input ref={node => { birthDate = node }} type="date" required />
                                </div>
                                <div className='control'>
                                    <label>{t('lieu')}</label><br />
                                    <input ref={node => { birthCityId = node }} type="text" required />
                                </div>
                            </div>
                            <div className='card complement'>
                                <h3>{t('infoComp')}</h3>
                                <div className='control'>
                                    <label>Email</label><br />
                                    <input ref={node => { email = node }} type="text" required />
                                </div>
                                <div className='control'>
                                    <label>Description</label><br />
                                    <input ref={node => { description = node }} type="text" required />
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='btn-save'>{t('save')}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AjouterPatient
