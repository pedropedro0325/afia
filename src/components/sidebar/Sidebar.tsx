import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div>
                <div className='dash'>
                    <li>Tableau de bord</li>
                </div>
                <div className='categories'>
                    <Link to='/patient'><li>Patients</li></Link>
                    <Link to='/'><li>Consultations</li></Link>
                    <Link to='/'><li>Médecins</li></Link>
                    <Link to='/'><li>Infirmerie</li></Link>
                    <Link to='/'><li>Laboratoire</li></Link>
                </div>
            </div>
            <div>
                lorem
            </div>
        </div>
    )
}

export default Sidebar
