import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './events.scss'
import { useEvents } from '../../../hooks/Events/useEvents'
import { useTranslation } from 'react-i18next'

const Events = () => {

    const { t } = useTranslation()

    const { error, loading, data } = useEvents()

    const [events, setEvents] = useState<[]>([])

    useEffect(() => {
        setEvents(data?.events)
    }, [data])

    const filtered = data?.events?.filter((el: any) => el.description === "rdv")
    //console.log(filtered);

    // const act = data?.events?.map((el: any) => (el.care?.acts))
    // console.log(act); good

    // const actes = act?.map((el: any) => (el.price))
    // console.log(actes); error


    // const map = data?.events?.map((el: any) => (el.care?.patient?.name))
    // console.log(map); good

    const map = data?.events?.map((el: any) => (el.care?.partakers))
    // console.log(map);



    const [search, setSearch] = useState('')

    if (loading) return <div className='err loader'></div>
    if (error) return <div className='err'>something went wrong</div>

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='event-container'>
                    <h2>{t('listeEv')}</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>{t('event')}</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/evenements/ajouter`}>
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
                                    <th>{t('dateD')}</th>
                                    <th>{t('dateF')}</th>
                                    <th>{t('chambre')}</th>
                                    <th>Patient</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    events?.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.description?.toLowerCase().includes(search)
                                    }).map((event: any) => (
                                        <tr key={event.id}>
                                            <td>{event.description}</td>
                                            <td>{event.startDate}</td>
                                            <td>{event.endDate}</td>
                                            <td>{event.venue?.venueType?.description}</td>
                                            <td>{event.care?.patient?.name}</td>
                                            <td className='flex'><button className='btn-blue'><FontAwesomeIcon icon={faTrash} className="i-plus" /></button>
                                                <Link to={`/evenements/detail/${event.id}`}><button className='btn-blue'>{t('voir')}</button></Link>
                                            </td>
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
