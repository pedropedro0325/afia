import { Outlet, useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './detailPatient.scss'
import DossierMedical from '../../../components/DossierMedical/DossierMedical'
import { usePatient } from '../../../hooks/Patients/usePatient'
import { useTranslation } from 'react-i18next'
const Day = require('dayjs')

const DetailPatient = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    };

    const { t } = useTranslation()

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: any) => {
        setToggleState(index);
    };

    const { patientId } = useParams()

    const { data, error, loading } = usePatient(Number(patientId))

    if (loading) return <div className='err'><div className=' loader'></div></div>
    if (error) return <div className='err'>something went wrong</div>


    return (
        <div className='home-container'>
            <Outlet />
            <div className='details'>
                <div className='container'>
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            <h2>{t('infoPatient')}</h2>
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            <h2>{t('dossierMed')}</h2>
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                            <h2>{t('rapportMed')}</h2>
                        </button>
                    </div>

                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            <button className='back' onClick={goBack}>Retour</button>
                            <h2>Patient N° {data.patient.id}</h2>
                            <hr />
                            <div className='pers'>
                                <div className='part1'>
                                    <ul className='info'>
                                        <div className='class'>
                                            <li>{t('prenom')} : <h5>{data.patient.name}</h5></li>
                                            <li>{t('nom')} : <h5>{data.patient.lastName}</h5></li>
                                        </div>
                                        <div className='class'>
                                            <li>{t('dateNaiss')} : <h5>{Day(data.patient.birthDate).format("DD/MM/YYYY")}</h5></li>
                                            <li>{t('lieu')} : <h5>{data.patient.birthCityId}</h5></li>
                                        </div>
                                        <div className='class'>
                                            <li>Email : <h5>{data.patient.email}</h5></li>
                                            <li>{t('adresse')} : <h5>{data.patient.adressId}</h5></li>
                                            <li>{t('tel')} : <h5>{data.patient.phoneNumber}</h5></li>
                                        </div>
                                    </ul>
                                </div>
                                <div className='part2'>
                                    <h4>{t('apropos')}</h4>
                                    <p>{data.patient.description}</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <DossierMedical data={data} />
                        </div>

                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <div className='gen'>
                                <button className='back' onClick={goBack}>Retour</button>
                                <div className='rapport'>
                                    <div className='space'>
                                        <h5>{t('bCoeur')}</h5>
                                        <h5>76</h5>
                                    </div>
                                    <div className='stat'>
                                        <div className='stat1'></div>
                                    </div>
                                </div>
                                <div className='rapport'>
                                    <div className='space'>
                                        <h5>{t('sucre')}</h5>
                                        <h5>50</h5>
                                    </div>
                                    <div className='stat'>
                                        <div className='stat2'></div>
                                    </div>
                                </div>
                                <div className='rapport'>
                                    <div className='space'>
                                        <h5>{t('pression')}</h5>
                                        <h5>65</h5>
                                    </div>
                                    <div className='stat'>
                                        <div className='stat3'></div>
                                    </div>
                                </div>
                                <div className='rapport'>
                                    <div className='space'>
                                        <h5>{t('hemo')}</h5>
                                        <h5>78%</h5>
                                    </div>
                                    <div className='stat'>
                                        <div className='stat4'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPatient
