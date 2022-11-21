import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='left'>
                    <div className='logo'>
                        <h2><Link to='/'>Logo</Link></h2>
                    </div>
                    <li><Link to='/'>Tableau de bord</Link></li>
                    <li><Link to='/'>Services</Link></li>
                </div>
                <div className='right'>
                    <li></li>
                    <li></li>
                    <li>Compte</li>
                </div>
            </nav>
        </>
    )
}

export default Navbar
