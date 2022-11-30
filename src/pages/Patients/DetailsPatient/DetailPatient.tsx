import { Outlet, useParams } from 'react-router-dom'
import { useState } from 'react'
import './detailPatient.scss'
import DossierMedical from '../../../components/DossierMedical/DossierMedical'
import { usePatient } from '../../../hooks/Patients/usePatient'

const DetailPatient = () => {



    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: any) => {
        setToggleState(index);
    };

    const { patientId } = useParams()

    const { data, error, loading } = usePatient(patientId)

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
                            <h2>...</h2>
                        </button>
                    </div>

                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            <h2>Patient N° {data.patient.id}</h2>
                            <hr />
                            <ul>
                                <li>Prénom : {data.patient.name}</li>
                                <li>Nom : {data.patient.lastName}</li>
                                <li>Date de naissance : {data.patient.birthDate}</li>
                                <li>Lieu de naissance : {data.patient.birthCityId}</li>
                                <li>Adresse : {data.patient.adressId}</li>
                                <li>Téléphone : {data.patient.phoneNumber}</li>
                                <li>Email : {data.patient.email}</li>
                            </ul>
                        </div>

                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <DossierMedical />
                        </div>

                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <h2>Content 3</h2>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                                nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                                Accusamus in quia odit aspernatur provident et ad vel distinctio
                                recusandae totam quidem repudiandae omnis veritatis nostrum
                                laboriosam architecto optio rem, dignissimos voluptatum beatae
                                aperiam voluptatem atque. Beatae rerum dolores sunt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPatient
