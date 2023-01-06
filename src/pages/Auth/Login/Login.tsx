import React from 'react'
import './login.scss'
import { Outlet, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Login = () => {

    const { t } = useTranslation()

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='login'>
                    <div className='container'>
                        <div className='left'>
                            <h1>{t('login')}</h1>
                            <p>{t('noCompte')} ? <Link to='/enregistrement'>{t('noConnecte')}</Link></p>
                        </div>
                        <div className='right'>
                            <form action="">
                                <div className='control'>
                                    <label htmlFor="">{t('Email')}</label><br />
                                    <input type="text" required />
                                </div>
                                <div className='control'>
                                    <label htmlFor="">{t('pass')}</label><br />
                                    <input type="password" required />
                                </div>
                                <div className='control'>
                                    <button className='btn-save' type='submit'>{t('login')}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
