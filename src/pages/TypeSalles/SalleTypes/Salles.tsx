import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useVenuesTypes } from '../../../hooks/TypeSalles/useTypeSalles'

const Salles = () => {

    const { data, error, loading } = useVenuesTypes()

    const [salles, setSalles] = useState<[]>([])

    useEffect(() => {
        setSalles(data?.venueTypes)
    }, [data])

    const [search, setSearch] = useState('')

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='chambre-container'>
                    <h2>La liste des salles</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Salles</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/ajouter/type/salle`}>
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
                                    <th>N° de salle</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    salles?.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.description?.toLowerCase().includes(search)
                                    }).map((el: any) => (
                                        <tr key={el.id}>
                                            <td>{el.id}</td>
                                            <td>{el.description}</td>
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

export default Salles
