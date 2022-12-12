import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './actes.scss'
import { useActes } from '../../../hooks/Actes/useActes'

const Actes = () => {

    const { data, loading, error } = useActes()

    const [actes, setActes] = useState<[]>([])

    useEffect(() => {
        setActes(data?.acts)
    }, [data])

    const [search, setSearch] = useState('')

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='acte-container'>
                    <h2>La liste des actes</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Actes</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/ajouter/acte`}>
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
                                    <th>Description Fr</th>
                                    <th>Description En</th>
                                    <th>Prix</th>
                                    <th>Spécialité</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    actes?.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.NomPatient.toLowerCase().includes(search)
                                    }).map((el: any) => (
                                        <tr key={el.id}>
                                            <td>{el.description.fr}</td>
                                            <td>{el.description.en}</td>
                                            <td>{el.price}</td>
                                            <td>{el.specialities.description}</td>
                                            <td><button className='btn-blue'><FontAwesomeIcon icon={faTrash} className="i-plus" /></button></td>
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

export default Actes
