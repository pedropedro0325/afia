import React from 'react'
import './error.scss'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const ErrorPage = () => {

    const { t } = useTranslation()

    return (
        <div className='error'>
            <button className='back'><Link to='/'>{t('revenir')}</Link></button>
            <div>
                <h1>{t('error')}<span>404</span></h1>
                <h1>{t('erreurPage')}</h1>
            </div>
        </div>
    )
}

export default ErrorPage
