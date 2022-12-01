import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './ajouterPersonnel.scss'
import { useSpecialities } from '../../../hooks/Specialities/useSpecialities'
import { gql, useMutation } from '@apollo/client'
import { useForm } from '../../../utils/hooks'


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
        specialityId
        description
    }
    }
`

const AjouterPersonnel = () => {

    const [name, setName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [birthDate, setBirthDate] = useState<string>('')
    const [birthCityId, setBirthCityId] = useState<string>('')
    const [adressId, setAdressId] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [typeId, setTypeId] = useState<string>('')
    const [specialityId, setSpecialityId] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<number>()

    const [createPartaker, { loading, error }] = useMutation(CREATE_PERSONNEL)



    const [initialState, setReportValues] = useState({
        nom: "",
        prenom: "",
        //il faudrait rajouter les autres propriétes du formulaire
      });

    const { data } = useSpecialities();

    const { onChange, onSubmit, values } = useForm(
        formCallback,
        initialState
    );

    if (loading) return <div>...loading</div>
    if (error) return <div>something went wrong</div>
    async function formCallback() {
        // send "values" to database
        console.log("=================", values)
        // createPartaker({ variables: { name: name, lastName: lastName, birthDate: birthDate, birthCityId: birthCityId,
        //      adressId: adressId, phoneNumber: Number(phoneNumber), email: email, description: description,
        //       typeId: typeId, specialityId: specialityId } })
                      
    }

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterPersonnel-container'>
                    <h2>Ajouter un personnel</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='control'>
                                <div>
                                    <input id="prenom"  name="prenom"  onChange={onChange} type="text" className='input' placeholder='Prénom*' />
                                </div>
                                <div>
                                    <input id="nom" name="nom"  onChange={onChange} type="text" className='input' placeholder='Nom*' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <label htmlFor="">Date de naissance*</label>
                                    <input id="birthDate" onChange={ onChange} type="date" className='input' />
                                </div>
                                <div>
                                    <label htmlFor="">Lieu de naissance*</label>
                                    <input value={birthCityId} onChange={onChange} type="text" className='input' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <input value={phoneNumber} type="text" className='input' placeholder='Téléphone*' />
                                </div>
                                <div>
                                    <input value={email} onChange={onChange} type="text" className='input' placeholder='Email*' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <input value={typeId} onChange={onChange} type="text" className='input' placeholder='Type*' />
                                </div>
                                <div>
                                    <input value={adressId} onChange={onChange} type="text" className='input' placeholder='Adresse*' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <input value={description} onChange={onChange} type="text" className='input' placeholder='Description*' />
                                </div>
                                <div>
                                    <select className='input' placeholder='Specialité*'>
                                        {
                                            data?.specialities.map((speciality: any) => (
                                                <option key={speciality.id} value={speciality.id}>{speciality.description}</option>
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
