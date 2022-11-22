import { Outlet, useParams } from 'react-router-dom'
import { useState } from 'react'
import './detailPatient.scss'

const DetailPatient = () => {

    const { id } = useParams()
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: any) => {
        setToggleState(index);
    };

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
                            <h2>Information du patient</h2>
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
                            <h2>Patient N° {id}</h2>
                            <hr />
                            <ul>
                                <li>Prénom :</li>
                                <li>Nom :</li>
                                <li>N° de CIN :</li>
                                <li>Date de naissance :</li>
                                <li>Lieu de naissance :</li>
                                <li>Nationalité :</li>
                                <li>Adresse :</li>
                                <li>Ville :</li>
                                <li>Pays :</li>
                                <li>Téléphone :</li>
                                <li>Email :</li>
                            </ul>
                        </div>

                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <h2>Content 2</h2>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                                voluptatum qui adipisci.
                            </p>
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
