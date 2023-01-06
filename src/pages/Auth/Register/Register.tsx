import React from 'react'
import './register.scss'
import { Outlet, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Register = () => {

    const { t } = useTranslation()

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='register'>
                    <div className='container'>
                        <div className='left'>
                            <h1>{t('register')}</h1>
                            <p>{t('compte')} ? <Link to='/connexion'>{t('connecte')}</Link></p>
                        </div>
                        <div className='right'>
                            <form action="">
                                <div className='control'>
                                    <label htmlFor="">{t('prenom')}</label><br />
                                    <input type="text" required />
                                </div>
                                <div className='control'>
                                    <label htmlFor="">{t('Email')}</label><br />
                                    <input type="email" required />
                                </div>
                                <div className='control'>
                                    <label htmlFor="">{t('pass')}</label><br />
                                    <input type="password" required />
                                </div>
                                <div className='control'>
                                    <label htmlFor="">{t('cPass')}</label><br />
                                    <input type="password" required />
                                </div>
                                <div className='control'>
                                    <button className='btn-save' type='submit'>{t('save')}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
