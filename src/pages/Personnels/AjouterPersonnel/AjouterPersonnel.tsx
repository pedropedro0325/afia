import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './ajouterPersonnel.scss'
import { useSpecialities } from '../../../hooks/Specialities/useSpecialities'
import { useTypes } from '../../../hooks/Types/useTypes'
import { gql, useMutation } from '@apollo/client'
import { useForm } from '../../../utils/hooks'
import { useTranslation } from 'react-i18next'


const CREATE_PERSONNEL = gql`
mutation CreatePartaker($name: String, $lastName: String, $birthDate: String, $birthCityId: String, $adressId: String, $phoneNumber: String, $email: String, $typeId: String, $specialityId: String, $description: String) {
  createPartaker(name: $name, lastName: $lastName, birthDate: $birthDate, birthCityId: $birthCityId, adressId: $adressId, phoneNumber: $phoneNumber, email: $email, typeId: $typeId, specialityId: $specialityId, description: $description) {
    id
    name
    lastName
    birthDate
    birthCityId
    adressId
    phoneNumber
    email
    partakerType {
      id
      description
    }
    speciality {
      id
      description {
        fr
        en
      }
    }
    description
    creationDate
  }
}
`

const AjouterPersonnel = () => {

    const navigate = useNavigate()

    const { t } = useTranslation()

    const [createPartaker, { loading, error }] = useMutation(CREATE_PERSONNEL)

    console.log("=========Mutation", error)

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

    const [specs, setSpecs] = useState<[]>([])
    const [types, setTypes] = useState<[]>([])

    useEffect(() => {
        setSpecs(data?.specialities)
    }, [data])

    useEffect(() => {
        setTypes(dataT?.partakerTypes)
    }, [dataT])

    const { onChange, onChangeOption, onSubmit, values } = useForm(
        formCallback,
        initialState
    );

    if (loading) return 'Soumission...'

    async function formCallback() {

        try {
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
            navigate('/personnels')
            window.location.reload()
        }
        catch (error: any) {
            if (error) return `
            Erreur de soumission ! ${error.message}`
        }

    }

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterPersonnel-container'>
                    <h2>{t('ajouterPers')}</h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='control'>
                                <div>
                                    <label htmlFor="">{t('prenom')}</label><br />
                                    <input id="prenom" name="name" onChange={onChange} type="text" className='input' placeholder='' required />
                                </div>
                                <div>
                                    <label htmlFor="">{t('nom')}</label><br />
                                    <input id="lastName" name="lastName" onChange={onChange} type="text" className='input' placeholder='' required />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <label htmlFor="">{t('dateNaiss')}</label><br />
                                    <input id="birthDate" name="birthDate" onChange={onChange} type="date" className='input' placeholder='' required />
                                </div>
                                <div>
                                    <label htmlFor="">{t('lieu')}</label><br />
                                    <input id="birthCityId" name="birthCityId" onChange={onChange} type="text" className='input' placeholder='' required />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <label htmlFor="">{t('tel')}</label><br />
                                    <input id="phoneNumber" name="phoneNumber" onChange={onChange} type="text" className='input' placeholder='' required />
                                </div>
                                <div>
                                    <label htmlFor="">Email</label><br />
                                    <input id="email" name="email" onChange={onChange} type="text" className='input' placeholder='' required />
                                </div>
                            </div>
                            <div className='control'>
                                <div><br />
                                    <select id="typeId" onChange={onChangeOption} name="typeId" className='input' required>
                                        <option value="">{t('selectType')}</option>
                                        {
                                            types?.map((el: any) => (
                                                <option key={el.id} value={el.id}>{el.description}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">{t('adresse')}</label><br />
                                    <input id="adressId" name="adressId" onChange={onChange} type="text" className='input' placeholder='' required />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <input id="description" name="description" onChange={onChange} type="text" className='input' placeholder='Description*' required />
                                </div>
                                <div>
                                    <select id="specialityId" onChange={onChangeOption} name="specialityId" className='input' required>
                                        <option value="">{t('selectSpec')}</option>
                                        {
                                            specs?.map((speciality: any) => (
                                                <option key={speciality.id} value={speciality.id}>{speciality.description.fr}</option>
                                            ))
                                        }
                                    </select>
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

export default AjouterPersonnel
