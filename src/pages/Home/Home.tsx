import { Outlet, Link } from 'react-router-dom'
import './home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faUserNurse } from '@fortawesome/free-solid-svg-icons'
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { faKitMedical } from '@fortawesome/free-solid-svg-icons'
import { usePatients } from '../../hooks/Patients/usePatients'
import { usePersonnels } from '../../hooks/Personnels/usePersonnels'
import { useEffect, useState } from 'react'
import { useMedecins } from '../../hooks/medecins/useMedecins'
import { useEvents } from '../../hooks/Events/useEvents'
import { useTranslation } from 'react-i18next'

const Home = ({ closeSideBar }: any) => {

    const { error, loading, data } = useMedecins()
    const { error: errorP, loading: loadingP, data: dataP } = usePersonnels()
    const { error: errorPat, loading: loadingPat, data: dataPat } = usePatients()
    const { error: errorE, loading: loadingE, data: dataE } = useEvents()


    const [medecin, setMedecin] = useState<[]>([])
    const [patient, setPatient] = useState<[]>([])
    const [personnel, setPersonnel] = useState<[]>([])
    const [event, setEvent] = useState<[]>([])

    useEffect(() => {
        setMedecin(data?.partakers)
    }, [data])

    const medecins = medecin?.filter((curDate: any) => curDate?.partakerType?.id === "0")

    useEffect(() => {
        setPersonnel(dataP?.partakers)
    }, [dataP])

    const infirmiers = personnel?.filter((curDate: any) => curDate?.partakerType?.id === "4")

    useEffect(() => {
        setPatient(dataPat?.patients)
    }, [dataPat])

    useEffect(() => {
        setEvent(dataE?.events)
    }, [dataE])

    const { t } = useTranslation()

    if (loading) return <div className='err'><div className=' loader'></div></div>
    if (error) return <div className='err'>{t('err')}</div>

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <section>
                </section>
                <div className='stats'>
                    <div className='parents'>
                        <div className='box'>
                            <div className='box-top'>
                                <div onClick={closeSideBar}>
                                    <h3>{patient?.length}</h3>
                                    <h4>{t('patients')}</h4>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faUser} className="i-user" />
                                </div>
                            </div>
                            <div className='box-bot1'>.</div>
                        </div>
                        <div className='box'>
                            <div className='box-top'>
                                <div>
                                    <h3>{medecins?.length}</h3>
                                    <h4>{t('medecins')}</h4>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faUserDoctor} className="i-user" />
                                </div>
                            </div>
                            <div className='box-bot2'>.</div>
                        </div>
                        <div className='box'>
                            <div className='box-top'>
                                <div>
                                    <h3>{infirmiers?.length}</h3>
                                    <h4>{t('infirmiers')}</h4>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faUserNurse} className="i-user" />
                                </div>
                            </div>
                            <div className='box-bot3'>.</div>
                        </div>
                        <div className='box'>
                            <div className='box-top'>
                                <div>
                                    <h3>{event?.length}</h3>
                                    <h4>{t('consultations')}</h4>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faNotesMedical} className="i-user" />
                                </div>
                            </div>
                            <div className='box-bot4'>.</div>
                        </div>
                    </div>
                </div>
                <div className='table-stats'>
                    <div className='reserve'>
                        <h3>{t('rdv')}</h3>
                        <table id="customers">
                            <tr>
                                <th>Patient</th>
                                <th>Médecin assigner</th>
                                <th>{t('acte')}</th>
                                <th></th>
                            </tr>
                            <tbody>
                                {
                                    event?.slice(0, 3)?.reverse()?.map((event: any) => (
                                        <tr key={event.id}>
                                            <td>{event.care?.patient?.name}</td>
                                            <td>{event.care?.partakers?.map((el: any) => el?.name)}</td>
                                            <td>{event.care?.acts?.map((el: any) => (<p key={el.id}>{el.description?.fr}</p>))}</td>
                                            <td><Link to={`/evenements/detail/${event.id}`}><button className='btn-blue'>{t('voir')}</button></Link></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='dr'>
                        <h3>{t('listeMedecin')}</h3>
                        <table id="customers">
                            <tr>
                                <th>{t('nom')}</th>
                                <th>{t('statut')}</th>
                            </tr>
                            <tbody>
                                {
                                    medecin?.slice(0, 3)?.reverse()?.map((el: any) => (
                                        <tr key={el.id}>
                                            <td>{el.name}</td>
                                            <td>{t('dispo')}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
