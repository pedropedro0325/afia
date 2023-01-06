import React, { useState, useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import './event.scss'
import { useEvent } from '../../../hooks/Events/useEvent'
import { useTranslation } from 'react-i18next'

const Event = () => {

    const { eventId } = useParams()

    const { t } = useTranslation()

    const { data, error, loading } = useEvent(Number(eventId))

    if (loading) return <div className='err'><div className=' loader'></div></div>
    if (error) return <div className='err'>{t('err')}</div>

    return (
        <div className='home-container'>
            <Outlet />
            <h2 className='h2'>{t('detailEvent')}</h2>
            <h2 className='h'>{t('titre')}  <h5>{data?.event?.description}</h5></h2>
            <div className='event'>
                <div className='desc'>
                    <div className='desc1'>
                        <h4>{t('acte')} </h4>
                        <h5>{data?.event?.care?.acts?.map((el: any) => (<p key={el.id}>{el.description?.fr}</p>))}</h5>
                    </div>
                    <div className='desc1'>
                        <h4>{t('maladie')}  </h4>
                        <h5>{data?.event?.care?.diseases?.map((el: any) => (el?.id))}</h5>
                    </div>
                    <div className='desc1'>
                        <h4>{t('chambre')}  </h4>
                        <h5>{data?.event?.venue?.description}</h5>
                        <h5>{data?.event?.venue?.venueType?.description}</h5>
                        <h5>N °  {data?.event?.venue?.phoneNumber}</h5>
                    </div>
                    <div className='desc1'>
                        <h4>{t('statut')}  </h4>
                        <h5>{data?.event?.status?.description?.fr}</h5>
                    </div>
                </div>
                <div className='date'>
                    <div className='dte'>
                        <h4>{t('dateD')} </h4>
                        <h5>{data?.event?.startDate}</h5>
                    </div>
                    <div className='dte'>
                        <h4>{t('dateF')} </h4>
                        <h5>{data?.event?.endDate}</h5>
                    </div>
                    <div className='dte'>
                        <h4>{t('nomPatient')} </h4>
                        <h5>{data?.event?.care?.patient?.name} {data?.event?.care?.patient?.lastName}</h5>
                    </div>
                    <div className='dt'>
                        <h4>{t('nomMed')} </h4>
                        <h5>{data?.event?.care?.partakers?.map((el: any) => (el?.name))}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event
