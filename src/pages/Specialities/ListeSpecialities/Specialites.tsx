import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './listeSpecialites.scss'
import { useSpecialities } from '../../../hooks/Specialities/useSpecialities'

const Specialites = () => {

    const { data, loading, error } = useSpecialities()
    const [specs, setSpecs] = useState<[]>([])

    useEffect(() => {
        setSpecs(data?.specialities)
    }, [data])

    const [search, setSearch] = useState('')


    if (loading) return <div>...loading</div>
    if (error) return <div>something went wrong</div>

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='medecin-container'>
                    <h2>La liste des spécialités des médecins</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Spécialités des médecins</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
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
                                    <th>Spécilité du médecin Fr</th>
                                    <th>Spécilité du médecin En</th>
                                    <th>Statut</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    specs?.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.description.toLowerCase().includes(search)
                                    }).map((speciality: any) => (
                                        <tr key={speciality.id}>
                                            <td>{speciality.id}</td>
                                            <td>{speciality.description.fr}</td>
                                            <td>{speciality.description.en}</td>
                                            <td><button className='btn-statut'>Active</button></td>
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
