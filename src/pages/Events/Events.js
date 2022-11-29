import React from 'react'
import { Outlet } from 'react-router-dom'
import './events.scss'
import { useEvents } from '../../hooks/Events/useEvents'

const Events = () => {

    const { error, loading, data } = useEvents()

    if (loading) return <div>...loading</div>
    if (error) return <div>something went wrong</div>

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='event-container'>
                    {data.events.map((event) => {
                        return <div key={event.id}>{event.description}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Events
