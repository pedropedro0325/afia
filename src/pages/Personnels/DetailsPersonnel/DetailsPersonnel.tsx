import { Outlet, useParams } from 'react-router-dom'
import { useState } from 'react'
import './detailPersonnel.scss'

const DetailsPersonnel = () => {
    const { id } = useParams()
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='details'>
                    <h1>{id}</h1>
                </div>
            </div>
        </div>
    )
}

export default DetailsPersonnel
