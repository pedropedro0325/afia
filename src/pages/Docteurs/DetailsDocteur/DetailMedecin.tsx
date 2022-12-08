import { Outlet, useParams } from 'react-router-dom'
import { useState } from 'react'
import './detailMedecin.scss'
import { usePersonnel } from '../../../hooks/Personnels/usePersonnel'

const DetailPatient = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: any) => {
        setToggleState(index);
    };

    const { partakerId } = useParams()

    const { data, error, loading } = usePersonnel(Number(partakerId))

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
                            <h2>Information du personnel</h2>
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            <h2>Agenda</h2>
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
                            <h2>Personnel N° {partakerId}</h2>
                            <hr />

                            <div className='pers'>
                                <div className='part1'>
                                    <ul className='info'>
                                        <div className='class'>
                                            <li>Prénom : <h5>{data.partaker.name}</h5></li>
                                            <li>Nom : <h5>{data.partaker.lastName}</h5></li>
                                            <li>Date de naissance : <h5>{data.partaker.birthDate}</h5></li>
                                        </div>
                                        <div className='class'>
                                            <li>Lieu de naissance : <h5>{data.partaker.birthCityId}</h5></li>
                                            <li>Adresse : <h5>{data.partaker.adressId}</h5></li>
                                            <li>Téléphone : <h5>{data.partaker.phoneNumber}</h5></li>
                                        </div>
                                        <div className='class'>
                                            <li>Email : <h5>{data.partaker.email}</h5></li>
                                            <li>Type : <h5>{data.partaker.typeId}</h5></li>
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
                            <h3>L'agenda
                                <p className='name'>{data.partaker.name} {data.partaker.lastName}</p>
                            </h3>
                            <br />
                            <table>
                                <tr>
                                    <th>Description</th>
                                    <th>Date et heure de début</th>
                                    <th>Date et heure de fin</th>
                                </tr>
                                <tr>
                                    <td>Consultation</td>
                                    <td>Le 12 / 11 / 2022 12:00</td>
                                    <td>Le 12 / 11 / 2022 12:30</td>
                                </tr>
                            </table>
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
