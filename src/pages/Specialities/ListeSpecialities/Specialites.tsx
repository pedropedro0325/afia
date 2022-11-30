import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './listeSpecialites.scss'
import { useSpecialities } from '../../../hooks/Specialities/useSpecialities'

const Specialites = () => {

    const { data, loading, error } = useSpecialities()

    if (loading) return <div>...loading</div>
    if (error) return <div>something went wrong</div>

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='medecin-container'>
                    <h2>La liste des spécialités</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Spécialités</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche' />
                            </div>
                            <Link to={`/ajouter/specialite`}>
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
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.specialities.map((speciality: any) => (
                                        <tr key={speciality.id}>
                                            <td>{speciality.id}</td>
                                            <td>{speciality.description}</td>
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

export default Specialites
