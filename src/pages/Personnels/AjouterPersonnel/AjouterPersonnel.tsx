import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './ajouterPersonnel.scss'
import { useSpecialities } from '../../../hooks/Specialities/useSpecialities'
import { useTypes } from '../../../hooks/Types/useTypes'
import { gql, useMutation } from '@apollo/client'
import { useForm } from '../../../utils/hooks'


const CREATE_PERSONNEL = gql`
mutation CreatePartaker($name: String, $lastName: String, $birthDate: String, $birthCityId: String, $adressId: String, $phoneNumber: Int, $email: String, $typeId: String, $specialityId: String, $description: String) {
  createPartaker(name: $name, lastName: $lastName, birthDate: $birthDate, birthCityId: $birthCityId, adressId: $adressId, phoneNumber: $phoneNumber, email: $email, typeId: $typeId, specialityId: $specialityId, description: $description) {
    id
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



    const [createPartaker, { loading, error }] = useMutation(CREATE_PERSONNEL)



    const [initialState, setReportValues] = useState({
        name: "",
        lastName: "",
        birthDate: "",
        birthCityId: "",
        adressId: "",
        email: "",
        description: "",
        phoneNumber: "",
        typeId: "",
        specialityId: ""
    });

    const { data } = useSpecialities();
    const { data: dataT } = useTypes()

    const { onChange, onChangeOption, onSubmit, values } = useForm(
        formCallback,
        initialState
    );

    if (loading) return <div>...loading</div>
    if (error) return <div>something went wrong</div>
    async function formCallback() {
        const valuesCallBack: any = values
        // send "values" to database
        console.log("=================", values)
        createPartaker({
            variables: {
                name: valuesCallBack.name, lastName: valuesCallBack.lastName, birthDate: valuesCallBack.birthDate, birthCityId: valuesCallBack.birthCityId,
                adressId: valuesCallBack.adressId, phoneNumber: valuesCallBack.phoneNumber, email: valuesCallBack.email, description: valuesCallBack.description,
                typeId: valuesCallBack.typeId, specialityId: valuesCallBack.specialityId
            }
        })

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
                                    <input id="prenom" name="name" onChange={onChange} type="text" className='input' placeholder='Prénom*' />
                                </div>
                                <div>
                                    <input id="lastName" name="lastName" onChange={onChange} type="text" className='input' placeholder='Nom*' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <label htmlFor="">Date de naissance*</label><br />
                                    <input id="birthDate" name="birthDate" onChange={onChange} type="date" className='input' placeholder='Date de naissance' />
                                </div>
                                <div><br />
                                    <input id="birthCityId" name="birthCityId" onChange={onChange} type="text" className='input' placeholder='Lieu de naissance*' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <input id="phoneNumber" name="phoneNumber" onChange={onChange} type="text" className='input' placeholder='Téléphone*' />
                                </div>
                                <div>
                                    <input id="email" name="email" onChange={onChange} type="text" className='input' placeholder='Email*' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <select id="typeId" onChange={onChangeOption} name="typeId" className='input'>
                                        <option value="">Sélectionner le type</option>
                                        {
                                            dataT?.partakerTypes.map((el: any) => (
                                                <option key={el.id} value={el.id}>{el.description}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div>
                                    <input id="adressId" name="adressId" onChange={onChange} type="text" className='input' placeholder='Adresse*' />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <input id="description" name="description" onChange={onChange} type="text" className='input' placeholder='Description*' />
                                </div>
                                <div>
                                    <select id="specialityId" onChange={onChangeOption} name="specialityId" className='input'>
                                        <option value="">Sélectionner la spécialité du médecin</option>
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
