import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './listePersonnel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { usePersonnels } from '../../../hooks/Personnels/usePersonnels'

const ListePersonnel = () => {

    const { error, loading, data } = usePersonnels()


    const [search, setSearch] = useState('')

    if (loading) return <div>...loading</div>
    if (error) return <div>something went wrong</div>

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='personnel-container'>
                    <h2>La liste des personnels</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Personnels</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/ajouter-un-personnel`}>
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
                                    <th>Prénom</th>
                                    <th>Nom</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.partakers.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.name.toLowerCase().includes(search)
                                    }).map((el: any) => (
                                        <tr key={el.id}>
                                            <td>{el.name}</td>
                                            <td>{el.lastName}</td>
                                            <td>{el.email}</td>
                                            <td>{el.partakerType.description}</td>
                                            <td>{el.description}</td>
                                            <td><Link to={`/personnel/detail/${el.id}`}><button className='btn-blue'>voir</button></Link></td>
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

export default ListePersonnel
