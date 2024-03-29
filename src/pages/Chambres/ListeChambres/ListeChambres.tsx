import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './chambre.scss'
import { useVenues } from '../../../hooks/Venues/useVenues'
import { useTranslation } from 'react-i18next'

const ListeChambres = () => {

    const { t } = useTranslation()

    const { data, error, loading } = useVenues()

    const [chambres, setChambres] = useState<[]>([])

    useEffect(() => {
        setChambres(data?.venues)
    }, [data])

    const [search, setSearch] = useState('')

    if (loading) return <div className='err loader'></div>
    if (error) return <div className='err'>something went wrong</div>

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='chambre-container'>
                    <h2>{t('listeSalle')}</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>{t('salle')}</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/ajouter/salle`}>
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
                                    <th>{t('nSalle')}</th>
                                    <th>Description</th>
                                    <th>Type</th>
                                    <th>N° de téléphone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    chambres?.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.description?.toLowerCase().includes(search)
                                    }).map((el: any) => (
                                        <tr key={el.id}>
                                            <td>{el.id}</td>
                                            <td>{el.description}</td>
                                            <td>{el.venueType.description}</td>
                                            <td>{el.phoneNumber}</td>
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

export default ListeChambres
