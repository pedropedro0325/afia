import React from 'react'
import { Outlet } from 'react-router-dom'
import './event.scss'

const Event = () => {
    return (
        <div className='home-container'>
            <Outlet />
            <div className='card'>
                <h1>Card</h1>
            </div>
        </div>
    )
}

export default Event
