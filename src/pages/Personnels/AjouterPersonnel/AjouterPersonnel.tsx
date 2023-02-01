import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { Outlet, useNavigate, Link } from 'react-router-dom'
import './ajouterPersonnel.scss'
import { GET_SPECIALITIES } from '../../../hooks/Specialities/useSpecialities'
import { GET_TYPES } from '../../../hooks/Types/useTypes'
import { gql, useMutation } from '@apollo/client'
import { useForm } from '../../../utils/hooks'
import { useTranslation } from 'react-i18next'
import { CREATE_PERSONNEL } from './PersonnelMutation';
import { GET_PERSONNELS } from '../../../hooks/Personnels/usePersonnels';

const AjouterPersonnel = () => {

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
    const [typeId, setTypeId] = useState('')
    const [specialityId, setSpecialityId] = useState('')

    const [createPartaker] = useMutation(CREATE_PERSONNEL, {
        variables: {
            description, phoneNumber, email, name, lastName, adressId, birthCityId, birthDate, typeId, specialityId
        },
        update(cache, { data: { createPartaker } }) {
            const { partakers }: any = cache.readQuery({ query: GET_PERSONNELS })

            cache.writeQuery({
                query: GET_PERSONNELS,
                data: { partakers: [...partakers, createPartaker] },
            })
        }
    })

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (description === '' || adressId === '' || phoneNumber === '' || name === '' || lastName === '' || birthCityId === '' || birthDate === '' || email === '' || typeId === '' || specialityId === '') {
            return alert('Merci de remplir tous les champs');
        }

        createPartaker({ description, name, lastName, email, birthCityId, birthDate, phoneNumber, adressId, typeId, specialityId } as any)
        navigate('/personnels')
        setDescription('')
        setName('')
        setPhoneNumber('')
        setLastName('')
        setEmail('')
        setBirthCityId('')
        setBirthDate('')
        setAdressId('')
        setTypeId('')
        setSpecialityId('')
    }

    const { data } = useQuery(GET_SPECIALITIES);
    const { data: dataT } = useQuery(GET_TYPES)

    const [specs, setSpecs] = useState<[]>([])
    const [types, setTypes] = useState<[]>([])

    useEffect(() => {
        setSpecs(data?.specialities)
    }, [data])

    useEffect(() => {
        setTypes(dataT?.partakerTypes)
    }, [dataT])


    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterPersonnel-container'>
                    <h2>{t('ajouterPers')}
                        <button className='back' onClick={goBack}>Retour</button>
                    </h2>
                    <br />
                    <div className='form'>
                        <form onSubmit={onSubmit}>
                            <div className='control'>
                                <div>
                                    <label htmlFor="">{t('prenom')}</label><br />
                                    <input id="prenom" value={name} onChange={(e) => setName(e.target.value)} type="text" className='input' placeholder='' required />
                                </div>
                                <div>
                                    <label htmlFor="">{t('nom')}</label><br />
                                    <input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className='input' placeholder='' required />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <label htmlFor="">{t('dateNaiss')}</label><br />
                                    <input id="birthDate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className='input' placeholder='' required />
                                </div>
                                <div>
                                    <label htmlFor="">{t('lieu')}</label><br />
                                    <input id="birthCityId" value={birthCityId} onChange={(e) => setBirthCityId(e.target.value)} type="text" className='input' placeholder='' required />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <label htmlFor="">{t('tel')}</label><br />
                                    <input id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className='input' placeholder='' required />
                                </div>
                                <div>
                                    <label htmlFor="">Email</label><br />
                                    <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" className='input' placeholder='' required />
                                </div>
                            </div>
                            <div className='control'>
                                <div><br />
                                    <select id="typeId" value={typeId} onChange={(e) => setTypeId(e.target.value)} className='input' required>
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
                                    <input id="adressId" value={adressId} onChange={(e) => setAdressId(e.target.value)} type="text" className='input' placeholder='' required />
                                </div>
                            </div>
                            <div className='control'>
                                <div>
                                    <input id="description" value={description} onChange={(e) => setDescription(e.target.value)} type="text" className='input' placeholder='Description*' required />
                                </div>
                                <div>
                                    <select id="specialityId" value={specialityId} onChange={(e) => setSpecialityId(e.target.value)} className='input' required>
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
