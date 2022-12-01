import React from 'react'
import { Outlet } from 'react-router-dom'
import './ajouterPatient.scss'
import { gql, useMutation } from '@apollo/client'

const CREATE_PATIENT = gql`
    mutation CreatePatient($name: String, $lastName: String, $birthDate: String, $birthCityId: String, $adressId: String, $phoneNumber: String, $email: String, $description: String) {
    createPatient(name: $name, lastName: $lastName, birthDate: $birthDate, birthCityId: $birthCityId, adressId: $adressId, phoneNumber: $phoneNumber, email: $email, description: $description) {
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
    let name: any, lastName: any, birthDate: any, birthCityId: any, adressId: any, phoneNumber: any, email: any, description: any
    const [createPatient, { error, loading }] = useMutation(CREATE_PATIENT)

    if (loading) return 'Submitting...'
    if (error) return `Submission error! ${error.message}`

    return (
        <div className='home-container'>
            <Outlet />
            <div className='add-patient'>
                <h2>Enrégistrer un patient</h2>
                <div className='form'>
                    <form onSubmit={e => {
                        e.preventDefault()
                        createPatient({ variables: { name: name.value, lastName: lastName.value, birthDate: birthDate.value, birthCityId: birthCityId.value, adressId: adressId.value, phoneNumber: phoneNumber.value, email: email.value, description: description.value } })
                    }}>
                        <div className='form-top'>
                            <div className='card identite'>
                                <h3>Identité</h3>
                                <div className='control'>
                                    <label>Prénom</label><br />
                                    <input ref={node => { lastName = node }} type="text" />
                                </div>
                                <div className='control'>
                                    <label>Nom</label><br />
                                    <input ref={node => { name = node }} type="text" />
                                </div>
                            </div>
                            <div className='card adresse'>
                                <h3>Adresse personnelle</h3>
                                <div className='control'>
                                    <label>Adresse</label><br />
                                    <input ref={node => { adressId = node }} type="text" />
                                </div>
                                <div className='control'>
                                    <label>Téléphone</label><br />
                                    <input ref={node => { phoneNumber = node }} type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='form-bottom'>
                            <div className='card etat-civil'>
                                <h3>Etat civil</h3>
                                <div className='control'>
                                    <label>Date de naissance</label><br />
                                    <input ref={node => { birthDate = node }} type="date" />
                                </div>
                                <div className='control'>
                                    <label>Lieu</label><br />
                                    <input ref={node => { birthCityId = node }} type="text" />
                                </div>
                            </div>
                            <div className='card complement'>
                                <h3>Informations complémentaires</h3>
                                <div className='control'>
                                    <label>Email</label><br />
                                    <input ref={node => { email = node }} type="text" />
                                </div>
                                <div className='control'>
                                    <label>Description</label><br />
                                    <input ref={node => { description = node }} type="text" />
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='btn-save'>Enrégistrer</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AjouterPatient
