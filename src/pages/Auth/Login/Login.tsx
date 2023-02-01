import React from 'react'
import './login.scss'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Login = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    };

    const { t } = useTranslation()

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='login'>
                    <div className='container'>
                        <button className='back' onClick={goBack}>Retour</button>
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
