import { Outlet, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './detailPatient.scss'
import DossierMedical from '../../../components/DossierMedical/DossierMedical'
import { usePatient } from '../../../hooks/Patients/usePatient'

const DetailPatient = () => {



    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: any) => {
        setToggleState(index);
    };

    const { patientId } = useParams()

    const { data, error, loading } = usePatient(Number(patientId))

    if (loading) return <div style={{ margin: "1rem 15rem" }}>...loading</div>
    if (error) return <div style={{ margin: "1rem 15rem" }}>something went wrong</div>

    console.log({ error, loading, data });


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
                            <h2>Informations du patient</h2>
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            <h2>Dossier médical</h2>
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                            <h2>Rapport général</h2>
                        </button>
                    </div>

                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            <h2>Patient N° {data.patient.id}</h2>
                            <hr />
                            <div className='pers'>
                                <div className='part1'>
                                    <ul className='info'>
                                        <div className='class'>
                                            <li>Prénom : <h5>{data.patient.name}</h5></li>
                                            <li>Nom : <h5>{data.patient.lastName}</h5></li>
                                            <li>Email : <h5>{data.patient.email}</h5></li>
                                        </div>
                                        <div className='class'>
                                            <li>Date de naissance : <h5>{data.patient.birthDate}</h5></li>
                                            <li>Lieu de naissance : <h5>{data.patient.birthCityId}</h5></li>
                                        </div>
                                        <div className='class'>
                                            <li>Adresse : <h5>{data.patient.adressId}</h5></li>
                                            <li>Téléphone : <h5>{data.patient.phoneNumber}</h5></li>
                                        </div>
                                    </ul>
                                </div>
                                <div className='part2'>
                                    <h4>A propos</h4>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium itaque sed repudiandae reiciendis
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium itaque sed repudiandae reiciendis
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium itaque sed repudiandae reiciendis
                                    </p>
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
                                <div className='rapport'>
                                    <div className='space'>
                                        <h5>Battement de coeur</h5>
                                        <h5>76</h5>
                                    </div>
                                    <div className='stat'>
                                        <div className='stat1'></div>
                                    </div>
                                </div>
                                <div className='rapport'>
                                    <div className='space'>
                                        <h5>Sucre</h5>
                                        <h5>50</h5>
                                    </div>
                                    <div className='stat'>
                                        <div className='stat2'></div>
                                    </div>
                                </div>
                                <div className='rapport'>
                                    <div className='space'>
                                        <h5>Pression artérielle</h5>
                                        <h5>65</h5>
                                    </div>
                                    <div className='stat'>
                                        <div className='stat3'></div>
                                    </div>
                                </div>
                                <div className='rapport'>
                                    <div className='space'>
                                        <h5>Hémoglobine</h5>
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
