import React from 'react'
import { Outlet } from 'react-router-dom'
import './suivi.scss'
import { useTranslation } from 'react-i18next'

const Suivi = () => {
    const { t } = useTranslation()
    return (
        <div className='home-container'>
            <Outlet />
            <div className='suivi'>
                <h2>{t('suiviMed')}</h2>
                <div className='body'>
                    <form action="">
                        <div className='rapport'>
                            <h3>{t('rapportMed')}</h3><br />
                            <div className='control'>
                                <label htmlFor="">{t('bCoeur')}</label><br />
                                <input type="text" required />
                            </div>
                            <div className='control'>
                                <label htmlFor="">{t('sucre')}</label><br />
                                <input type="text" required />
                            </div>
                            <div className='control'>
                                <label htmlFor="">{t('pression')}</label><br />
                                <input type="text" required />
                            </div>
                            <div className='control'>
                                <label htmlFor="">{t('hemo')}</label><br />
                                <input type="text" required />
                            </div>
                        </div>
                        <div className='allergie'>
                            <h3>{t('allergie')}</h3>
                            <div className='control'>
                                <label htmlFor="">{t('allergie')} :</label><br />
                                <input type="text" required />
                            </div>
                        </div>
                        <div className='infos'>
                            <h3>{t('infoPatient')}</h3>
                            <div className='control'>
                                <label htmlFor=""></label>
                                <textarea name="" id="" rows={7} required></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Suivi
