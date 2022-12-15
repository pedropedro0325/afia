import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
// import logo from '../../assets/img/fr_logo.png'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const Menus = ['Compte', 'Paramètre', 'Déconnexion']
    const Langues = ['FR', 'EN']

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
                    <li>
                        <h4 className='lang' onClick={() => setOpen(!open)}>Langues</h4>
                        {
                            open && (
                                <div className='menu'>
                                    <ul>
                                        {
                                            Langues.map((el: any) => (
                                                <li onClick={() => setOpen(false)} key={el}>{el}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )}
                    </li>
                    {/* <li><img src={logo} alt="" /></li> */}
                    <li >
                        <h5 className='user'></h5>
                    </li>
                </div>
            </nav>
        </>
    )
}

export default Navbar
