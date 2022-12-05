import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import logo from '../../assets/img/fr_logo.png'

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
                    <li><img src={logo} alt="" /></li>
                    <li>Compte</li>
                </div>
            </nav>
        </>
    )
}

export default Navbar
