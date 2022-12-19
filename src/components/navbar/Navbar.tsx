import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/img/fr_logo.png'
import logoB from '../../assets/img/an_logo.png'

const Navbar = () => {
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

    return (
        <>
            <nav className='navbar'>
                <div className='left'>
                    <div className='logo'>
                        <NavLink to='/'><h2>Afia</h2></NavLink>
                    </div>
                    <NavLink to='/'><li>{t('bord')}</li></NavLink>
                </div>
                <div className='right'>

                    {/* <div className='language-wrapper'>
                        <h4 onClick={handleLanguage}>{language.find((lang) => lang.code.includes(languageCode))?.country}</h4>
                        <div className='options' style={{ display: isLanguageActive ? 'block' : 'none' }}>
                            {
                                language?.map((lang: any) => (
                                    <li onClick={() => {
                                        handleChangeLanguage(lang.code)
                                        setIsLanguageActive(false)
                                    }
                                    }>{lang.country}</li>
                                ))
                            }
                        </div>
                    </div> */}

                    <div className='language-wrapper'>
                        <h4 onClick={handleLanguage}>{t('ln')}</h4>
                        <div className='options' style={{ display: isLanguageActive ? 'block' : 'none' }}>
                            <ul>
                                <li className='ln' onClick={() => handleChangeLn("fr")}><img src={logo} alt="" />{t('fr')}</li>
                                <li className='ln' onClick={() => handleChangeLn("en")}><img src={logoB} className='an' alt="" />{t('en')}</li>
                            </ul>
                        </div>
                    </div>

                    <li >
                        <h5 className='user'></h5>
                    </li>
                </div>
            </nav>
        </>
    )
}

export default Navbar
