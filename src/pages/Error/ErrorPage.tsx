import React from 'react'
import './error.scss'
import { useTranslation } from 'react-i18next'

const ErrorPage = () => {

    const { t } = useTranslation()

    return (
        <div className='error'>
            <h1>{t('erreurPage')}</h1>
        </div>
    )
}

export default ErrorPage
