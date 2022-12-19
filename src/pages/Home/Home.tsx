import { Outlet } from 'react-router-dom'
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
import { useEffect, useState } from 'react'
import { useMedecins } from '../../hooks/medecins/useMedecins'
import { useEvents } from '../../hooks/Events/useEvents'
import { useTranslation } from 'react-i18next'

const Home = () => {

    const { error, loading, data } = useMedecins()
    const { error: errorPat, loading: loadingPat, data: dataPat } = usePatients()
    const { error: errorE, loading: loadingE, data: dataE } = useEvents()


    const [medecin, setMedecin] = useState<[]>([])
    const [patient, setPatient] = useState<[]>([])
    const [event, setEvent] = useState<[]>([])

    useEffect(() => {
        setMedecin(data?.partakers)
    }, [data])

    const medecins = medecin?.filter((curDate: any) => curDate?.partakerType?.description === "Doctor")
    const infirmiers = medecin?.filter((curDate: any) => curDate?.partakerType?.description === "infirmier")

    useEffect(() => {
        setPatient(dataPat?.patients)
    }, [dataPat])

    useEffect(() => {
        setEvent(dataE?.events)
    }, [dataE])

    const { t } = useTranslation()

    if (loadingE) return <div className='err loader'></div>
    if (error) return <div className='err'>Quelque chose s'est mal passé</div>

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
                                <div>
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
                        <h3>Rendez-vous réserver</h3>
                        <table id="customers">
                            <tr>
                                <th>Patient</th>
                                <th>Médecin assigner</th>
                                <th>Acte</th>
                            </tr>
                            <tbody>
                                {
                                    event?.slice(0, 3)?.map((event: any) => (
                                        <tr key={event.id}>
                                            <td>{event.care?.patient?.name}</td>
                                            <td>{event.care?.partakers?.name}</td>
                                            <td>{event.care?.acts?.map((el: any) => (<p key={el.id}>{el.description?.fr}</p>))}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='dr'>
                        <h3>Liste de docteurs</h3>
                        <table id="customers">
                            <tr>
                                <th>Nom</th>
                                <th>Statut</th>
                            </tr>
                            <tbody>
                                {
                                    medecin?.filter((curDate: any) => {
                                        return curDate.partakerType?.description === 'Doctor'
                                    })?.slice(0, 4)?.map((medecin: any) => (
                                        <tr key={medecin.id}>
                                            <td>{medecin.name}</td>
                                            <td>Disponible</td>
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
