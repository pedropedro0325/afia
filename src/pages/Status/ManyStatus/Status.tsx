import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useStatus } from '../../../hooks/Status/useStatus'

const Status = () => {

    const { data, error, loading } = useStatus()

    const [status, setStatus] = useState<[]>([])

    useEffect(() => {
        setStatus(data?.manyStatus)
    }, [data])

    const [search, setSearch] = useState('')

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='chambre-container'>
                    <h2>La liste des statut</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Statut</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/ajouter/status`}>
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
                                    <th>Description Fr</th>
                                    <th>Description En</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    status?.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.description.fr?.toLowerCase().includes(search)
                                    }).map((el: any) => (
                                        <tr key={el.id}>
                                            <td>{el.id}</td>
                                            <td>{el.description.fr}</td>
                                            <td>{el.description.en}</td>
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

export default Status
