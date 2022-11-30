import React from 'react'
import { Outlet } from 'react-router-dom'
import './ajouterPersonnel.scss'
import { useSpecialities } from '../../../hooks/Specialities/useSpecialities'
import { gql, useMutation } from '@apollo/client'

const CREATE_PERSONNEL = gql`
    mutation CreatePartaker($name: String, $lastName: String, $birthDate: String, $birthCityId: String, $adressId: String, $phoneNumber: Int, $email: String, $typeId: String, $specialityId: String, $description: String) {
    createPartaker(name: $name, lastName: $lastName, birthDate: $birthDate, birthCityId: $birthCityId, adressId: $adressId, phoneNumber: $phoneNumber, email: $email, typeId: $typeId, specialityId: $specialityId, description: $description) {
        name
        lastName
        birthDate
        birthCityId
        adressId
        phoneNumber
        email
        typeId
        speciality {
            id
            description 
        }
        description
    }
    }
`

const AjouterPersonnel = () => {

    let name: any, lastName: any, birthDate: any, birthCityId: any, adressId: any, phoneNumber: any, email: any, typeId: any, speciality: any, description: any
    const [createPartaker, { loading, error }] = useMutation(CREATE_PERSONNEL)

    const { data } = useSpecialities()

    if (loading) return <div>...loading</div>
    if (error) return <div>something went wrong</div>

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterPersonnel-container'>
                    <h2>Ajouter un personnel</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={e => {
                            e.preventDefault()
                            createPartaker({ variables: { name: name.value, lastName: lastName.value, birthDate: birthDate.value, birthCityId: birthCityId.value, adressId: adressId.value, phoneNumber: phoneNumber.value, email: email.value, description: description.value, typeId: typeId.value, speciality: speciality.value } })
                        }}>
                            <div className='control'>
                                <div>
                                    <input ref={node => { name = node }} type="text" className='input' placeholder='Prénom*' />
                                </div>
                                <div>
                                    <input ref={node => { lastName = node }} type="text" className='input' placeholder='Nom*' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <label htmlFor="">Date de naissance*</label>
                                    <input ref={node => { birthDate = node }} type="date" className='input' />
                                </div>
                                <div>
                                    <label htmlFor="">Lieu de naissance*</label>
                                    <input ref={node => { birthCityId = node }} type="text" className='input' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <input ref={node => { phoneNumber = node }} type="text" className='input' placeholder='Téléphone*' />
                                </div>
                                <div>
                                    <input ref={node => { email = node }} type="text" className='input' placeholder='Email*' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <input ref={node => { typeId = node }} type="text" className='input' placeholder='Type*' />
                                </div>
                                <div>
                                    <input ref={node => { adressId = node }} type="text" className='input' placeholder='Adresse*' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <input ref={node => { description = node }} type="text" className='input' placeholder='Description*' />
                                </div>
                                <div>
                                    <select ref={node => { speciality = node }} name="" className='input' placeholder='Specialité*'>
                                        {
                                            data.specialities.map((speciality: any) => (
                                                <option ref={node => { speciality = node }} key={speciality.id} value={speciality.id}>{speciality.description}</option>
                                            ))
                                        }
                                    </select>
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

export default AjouterPersonnel
