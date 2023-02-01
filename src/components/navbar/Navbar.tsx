import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import './navbar.scss'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/img/fr_logo.png'
import logoB from '../../assets/img/an_logo.png'

const Navbar = ({ openSidebar }: any) => {
    const [isLanguageActive, setIsLanguageActive] = useState(false)
    const { t, i18n } = useTranslation()

    const handleChangeLn = (lng: any) => {
        i18n.changeLanguage(lng)
        localStorage.setItem("lng", lng)
        setIsLanguageActive((prev) => !prev)
        setIsLanguageActive(false)
    }

    const handleLanguage = () => {
        setIsLanguageActive((prev) => !prev)
    }

    const [auth, setAuth] = useState(false)

    const toggleAuth = () => {
        setAuth((prevState) => !prevState)
    }

    return (
        <>
            <nav className='navbar'>
                <div className='left'>
                    <h5 onClick={openSidebar}><FontAwesomeIcon icon={faBars} className="i-plus" /></h5>
                    <div className='logo'>
                        <NavLink to='/'><h2>Afia</h2></NavLink>
                    </div>
                    <NavLink to='/'><li>{t('bord')}</li></NavLink>
                </div>
                <div className='right'>

                    <div className='language-wrapper'>
                        <h4 onClick={handleLanguage}>{t('ln')}</h4>
                        <div className='options' style={{ display: isLanguageActive ? 'block' : 'none' }}>
                            <FontAwesomeIcon icon={faCaretUp} className="i-plus" />

                            <h5 className='ln' onClick={() => handleChangeLn("fr")}><img src={logo} alt="" />{t('fr')}</h5>
                            <h5 className='ln' onClick={() => handleChangeLn("en")}><img src={logoB} className='an' alt="" />{t('en')}</h5>
                        </div>
                    </div>

                    {/* <li >
                        <h5 className='user'></h5>
                    </li> */}
                    <h5 onClick={toggleAuth}><FontAwesomeIcon icon={faList} className="i-plus" /></h5>
                    <div className={auth ? "auth auth--open" : "auth"}>

                        <NavLink onClick={toggleAuth} to='/enregistrement'><li>{t('register')}</li></NavLink>


                        <NavLink onClick={toggleAuth} to='/connexion'><li>{t('login')}</li></NavLink>

                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar
