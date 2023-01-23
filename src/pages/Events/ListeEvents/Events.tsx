import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './events.scss'
import { useEvents } from '../../../hooks/Events/useEvents'
import { useTranslation } from 'react-i18next'
import FilterBarEvent from '../../../components/filterBy/FilterBarEvent'

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter")
dayjs.extend(isSameOrAfter)

const Events = () => {

    const { t } = useTranslation()

    const { error, loading, data } = useEvents()

    const [events, setEvents] = useState<[]>([])

    useEffect(() => {
        setEvents(data?.events)
    }, [data])

    const handleFilterDesc = (desc: any) => {
        const filteredData = data?.events?.filter((el: any) => {
            const fullDesc = `${el?.description}`
            if (fullDesc?.toLowerCase().includes(desc?.toLowerCase())) {
                return el
            }
        })
        setEvents(filteredData)
    }

    const handleFilterCare = (care: any) => {
        const filteredData = data?.events?.filter((el: any) => {
            const cares = `${el?.care?.description}`
            if (cares?.toLowerCase().includes(care?.toLowerCase())) {
                return el
            }
        })
        setEvents(filteredData)
    }

    const handleFilterDate = (date: any, field: any) => {
        const filteredData = data?.events?.filter((el: any) => {
            if (field === "from" && dayjs(el?.startDate).isAfter(dayjs(date))) {
                return el
            }
        })
        setEvents(filteredData)
    }

    function refreshPage() {
        window.location.reload();
    }

    if (loading) return <div className='err'><div className=' loader'></div></div>
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
                            <Link to={`/evenements/ajouter`}>
                                <button className='btn-blue'>
                                    <FontAwesomeIcon icon={faPlus} className="i-plus" />
                                </button>
                            </Link>
                            <button onClick={refreshPage} className='btn-blue'>
                                <FontAwesomeIcon icon={faRefresh} className="i-plus" />
                            </button>
                            <button className='back'><Link to='/'>Retour</Link></button>
                        </div>
                        <div>
                            <FilterBarEvent onNameFilter={handleFilterDesc} onCareFilter={handleFilterCare} onDateFilter={handleFilterDate} />
                        </div>
                    </div>
                    <div className='table-patient'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>{t('dateD')}</th>
                                    <th>{t('motif')}</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    events?.map((event: any) => (
                                        <tr key={event.id}>
                                            <td>{event.description}</td>
                                            <td>{event.startDate}</td>
                                            <td>{event.care?.description}</td>
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
