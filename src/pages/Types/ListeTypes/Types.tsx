import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './types.scss'
import { useTypes } from '../../../hooks/Types/useTypes'

const Types = () => {

    const { data, loading, error } = useTypes()

    const [search, setSearch] = useState('')


    if (loading) return <div>...loading</div>
    if (error) return <div>something went wrong</div>

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='types-container'>
                    <h2>La liste des types</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Types</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/ajouter/type`}>
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
                                    data.partakerTypes.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.description.toLowerCase().includes(search)
                                    }).map((type: any) => (
                                        <tr key={type.id}>
                                            <td>{type.id}</td>
                                            <td>{type.description}</td>
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

export default Types
