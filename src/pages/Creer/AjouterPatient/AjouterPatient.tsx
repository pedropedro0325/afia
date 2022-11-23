import React from 'react'
import { Outlet } from 'react-router-dom'
import './ajouterPatient.scss'

const AjouterPatient = () => {
    return (
        <div className='home-container'>
            <Outlet />
            <div className='add-patient'>
                <h2>Ajouter un patient</h2>
            </div>
        </div>
    )
}

export default AjouterPatient
