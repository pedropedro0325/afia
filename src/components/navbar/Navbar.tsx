import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import logo from '../../assets/img/fr_logo.png'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const Menus = ['Compte', 'Paramètre', 'Déconnexion']

    // const menuRef = useRef()
    // const userRef = useRef()

    // window.addEventListener("click", (e) => {
    //     if (e.target !== menuRef.current && e.target !== userRef.current) {
    //         setOpen(false)
    //     }

    // })

    return (
        <>
            <nav className='navbar'>
                <div className='left'>
                    <div className='logo'>
                        <NavLink to='/'><h2>Afia</h2></NavLink>
                    </div>
                    <NavLink to='/'><li>Tableau de bord</li></NavLink>
                </div>
                <div className='right'>
                    <li></li>
                    <li><img src={logo} alt="" /></li>
                    <li >
                        <h5 className='user' onClick={() => setOpen(!open)}></h5>
                        {
                            open && (
                                <div className='menu'>
                                    <ul>
                                        {
                                            Menus.map((menu: any) => (
                                                <li onClick={() => setOpen(false)} key={menu}>{menu}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )}
                    </li>
                </div>
            </nav>
        </>
    )
}

export default Navbar
