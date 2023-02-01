import React, { useState } from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import './ajouterPatient.scss'
import { useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { CREATE_PATIENT } from './PatientMutation'
import { GET_PATIENTS } from '../../../hooks/Patients/usePatients'

const AjouterPatient = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    };

    const { t } = useTranslation()

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [description, setDescription] = useState('')
    const [adressId, setAdressId] = useState('')
    const [birthCityId, setBirthCityId] = useState('')
    const [birthDate, setBirthDate] = useState('')

    const [createPatient] = useMutation(CREATE_PATIENT, {
        variables: {
            description, phoneNumber, email, name, lastName, adressId, birthCityId, birthDate
        },
        update(cache, { data: { createPatient } }) {
            const { patients }: any = cache.readQuery({ query: GET_PATIENTS })

            cache.writeQuery({
                query: GET_PATIENTS,
                data: { patients: [...patients, createPatient] },
            })
        }
    })

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (description === '' || adressId === '' || phoneNumber === '' || name === '' || lastName === '' || birthCityId === '' || birthDate === '' || email === '') {
            return alert('Merci de remplir tous les champs');
        }

        createPatient({ description, name, lastName, email, birthCityId, birthDate, phoneNumber, adressId } as any)
        navigate('/patients')
        setDescription('')
        setName('')
        setPhoneNumber('')
        setLastName('')
        setEmail('')
        setBirthCityId('')
        setBirthDate('')
        setAdressId('')
    }

    return (
        <div className='home-container'>
            <Outlet />
            <div className='add-patient'>
                <h2>{t('ajouterPatient')}
                    <button className='back' onClick={goBack}>Retour</button>
                </h2>
                <div className='form'>
                    <form onSubmit={onSubmit}>
                        <div className='form-top'>
                            <div className='card identite'>
                                <h3>{t('identite')}</h3>
                                <div className='control'>
                                    <label>{t('prenom')}</label><br />
                                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" required />
                                </div>
                                <div className='control'>
                                    <label>{t('nom')}</label><br />
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" required />
                                </div>
                            </div>
                            <div className='card adresse'>
                                <h3>{t('adrePers')}</h3>
                                <div className='control'>
                                    <label>{t('adresse')}</label><br />
                                    <input value={adressId} onChange={(e) => setAdressId(e.target.value)} type="text" required />
                                </div>
                                <div className='control'>
                                    <label>{t('tel')}</label><br />
                                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" required />
                                </div>
                            </div>
                        </div>
                        <div className='form-bottom'>
                            <div className='card etat-civil'>
                                <h3>{t('etatCivil')}</h3>
                                <div className='control'>
                                    <label>{t('dateNaiss')}</label><br />
                                    <input value={birthDate} onChange={(e) => setBirthDate(e.target.value)} type="date" required />
                                </div>
                                <div className='control'>
                                    <label>{t('lieu')}</label><br />
                                    <input value={birthCityId} onChange={(e) => setBirthCityId(e.target.value)} type="text" required />
                                </div>
                            </div>
                            <div className='card complement'>
                                <h3>{t('infoComp')}</h3>
                                <div className='control'>
                                    <label>Email</label><br />
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" required />
                                </div>
                                <div className='control'>
                                    <label>Description</label><br />
                                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" required />
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
