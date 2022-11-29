import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='left'>
                    <div className='logo'>
                        <NavLink to='/'><h2>AFIA</h2></NavLink>
                    </div>
                    <NavLink to='/'><li>Tableau de bord</li></NavLink>
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
