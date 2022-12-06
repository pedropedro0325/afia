import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './events.scss'
import { useEvents } from '../../../hooks/Events/useEvents'

const Events = () => {

    const { error, loading, data } = useEvents()

    const [search, setSearch] = useState('')

    if (loading) return <div>...loading</div>
    if (error) return <div>something went wrong</div>

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='event-container'>
                    <h2>La liste des évènements</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Evènements</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/ajouter-un-evenement`}>
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
                                    <th>Description</th>
                                    <th>Date de début</th>
                                    <th>Date de fin</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.events.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.description.toLowerCase().includes(search)
                                    }).map((event: any) => (
                                        <tr key={event.id}>
                                            <td>{event.description}</td>
                                            <td>{event.startDate}</td>
                                            <td>{event.endDate}</td>
                                            <td><Link to={`/detail-evenement/${event.id}`}><button className='btn-blue'>voir</button></Link></td>
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

export default Events
