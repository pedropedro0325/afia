import { Outlet, useParams, useNavigate, Link } from 'react-router-dom'
import './event.scss'
import { useEvent } from '../../../hooks/Events/useEvent'
import { useTranslation } from 'react-i18next'
const Day = require('dayjs')

const Event = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    };

    const { eventId } = useParams()

    const { t } = useTranslation()

    const { data, error, loading } = useEvent(Number(eventId))

    // const actId = data?.event?.care?.acts?.map((el: any) => (el?.price?.map((el: any) => el?.value)))


    if (loading) return <div className='err'><div className=' loader'></div></div>
    if (error) return <div className='err'>{t('err')}</div>

    return (
        <div className='home-container'>
            <Outlet />
            <h2 className='h2'>{t('detailEvent')} <button className='backs' onClick={goBack}>Retour</button></h2>
            <h2 className='h'>{t('titre')}  <h5>{data?.event?.description}</h5></h2>
            <div className='event'>
                <div className='description'>
                    <hr />
                    <div className='desc1'>
                        <h4>{t('acte')} </h4>
                        <h5>{data?.event?.care?.acts?.map((el: any) => (<p key={el.id}>{el.description?.fr}</p>))}</h5>
                        {/* <h5>{data?.event?.care?.acts?.map((el: any) => (<p key={el.id}>{el.price?.map((el: any) => (el.value))}</p>))}</h5> */}
                    </div>

                    <div className='desc1'>
                        <h4>{t('nomPatient')} </h4>
                        <h5>{data?.event?.care?.patient?.name} {data?.event?.care?.patient?.lastName}</h5>
                    </div>
                    <div className='desc1'>
                        <h4>{t('motif')} </h4>
                        <h5>{data?.event?.care?.description}</h5>
                    </div>
                    <div className='desc1'>
                        <h4>{t('nomMed')} </h4>
                        <h5>{data?.event?.care?.partakers?.map((el: any) => (el?.name))} {data?.event?.care?.partakers?.map((el: any) => (el?.lastName))}</h5>
                    </div>
                    <div className='desc1'>
                        <h4>{t('chambre')}  </h4>
                        <h5>{data?.event?.venue?.description}</h5>
                        <h5>N °  {data?.event?.venue?.phoneNumber}</h5>
                    </div>
                    <div className='desc1'>
                        <h4>{t('dateD')} </h4>
                        <h5>{Day(data?.event?.startDate).format("DD - MM - YYYY . HH : mm")}</h5>
                    </div>
                    <div className='desc1'>
                        <h4>{t('dateF')} </h4>
                        <h5>{Day(data?.event?.endDate).format("DD - MM - YYYY . HH : mm")}</h5>
                    </div>
                    <div className='desc1'>
                        <h4>{t('statut')}  </h4>
                        <h5>{data?.event?.status?.description?.fr}</h5>
                    </div>
                    <div className='desc1'>
                        <h4>{t('maladie')}  </h4>
                        <h5>{data?.event?.care?.diseases?.map((el: any) => (el?.id))}</h5>
                    </div>
                    <hr />
                    <div className='exe'>
                        <Link to={`/paiement/${data.event.id}`}><button>{t('paiement')}</button></Link>
                        <Link to='/suivi-medical'><button>{t('suivi')}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event
