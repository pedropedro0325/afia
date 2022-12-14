import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './patient.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { usePatients } from '../../../hooks/Patients/usePatients'
import { useTranslation } from 'react-i18next'

const Patient = () => {

    const { t } = useTranslation()

    const { error, loading, data } = usePatients()

    const [search, setSearch] = useState('')

    console.log({ data })

    if (loading) return <div className='err loader'></div>
    if (error) return <div className='err'>something went wrong</div>

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='patient-container'>
                    <h2>{t('listePatient')}</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>{t('patient')}</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/patients/ajouter`}>
                                <button className='btn-blue'>
                                    <FontAwesomeIcon icon={faPlus} className="i-plus" />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='table-patient'>
                        <table>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>{t('prenom')}</th>
                                    <th>{t('nom')}</th>
                                    <th>Email</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.patients.filter((patient: any) => {
                                        return search.toLocaleLowerCase() === '' ? patient : patient.name?.toLowerCase().includes(search)
                                    }).map((patient: any) => (
                                        <tr key={patient.id}>
                                            <td>{patient.id}</td>
                                            <td>{patient.name}</td>
                                            <td>{patient.lastName}</td>
                                            <td>{patient.email}</td>
                                            <td>{patient.description}</td>
                                            <td><Link to={`/patient/detail/${patient.id}`}><button className='btn-blue'>{t('voir')}</button></Link></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Patient
