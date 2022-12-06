import React, { useState } from 'react'
import './dossierMedical.scss'

const DossierMedical = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: any) => {
        setToggleState(index);
    };

    return (
        <div>
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    <h4>Allergies</h4>
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    <h4>Informations</h4>
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    <h4>Antécédents</h4>
                </button>
                <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                >
                    <h4>Opérations</h4>
                </button>
            </div>
            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}>
                    <hr />
                    <ul className='desc'>
                        <li>
                            <h5>Allergie</h5>
                            <p>_ Aux arrachides</p>
                        </li>
                        <li>
                            <h5>Données cliniques</h5>
                            <p>_ Immuno-déprimé</p>
                            <p>_ Insuffisance hépatique</p>
                            <p>_ Corps étrangers métaliques</p>
                        </li>
                    </ul>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}>
                    <h4>04/06/2022</h4>
                    <hr />
                    <h4>Evaluation des besoins</h4>
                    <ul className='desc'>
                        <li>
                            <h5>Généralités</h5>
                            <p>_Date d'entrée dans l'unité : le 04/06/2022</p>
                            <p>_Motif d'hospitalisation : hta et depression(trouble bipolaire) depuis 15 ans</p>
                        </li>
                        <li>
                            <h5>Transfer</h5>
                            <p>_Vestiaire : Non</p>
                        </li>
                        <li>
                            <h5>Respiration</h5>
                            <p>_Respiration : Normal</p>
                            <p>_Oxygène : Non</p>
                            <p>_Aspiration : Non</p>
                            <p>_Trachéotomie : Non</p>
                        </li>
                        <li>
                            <h5>Nutrition</h5>
                            <p>_Appareil dentair</p>
                            <p>_Autonomie alimentation</p>
                            <p>_Poids (Kg) : 63</p>
                            <p>_Taille : (m) : 1,67</p>
                        </li>
                        <li>
                            <h5>Hygiène corporelle</h5>
                            <p>_Etat cutané : Peau saine</p>
                        </li>
                    </ul>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}>
                    <h4>Antécédents médicaux</h4>
                    <hr />
                    <br />
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Motif</th>
                            <th>Hopital</th>
                        </tr>
                        <tr>
                            <td>12/11/2021</td>
                            <td>Malaria</td>
                            <td>Elona</td>
                        </tr>
                    </table>
                </div>
                <div
                    className={toggleState === 4 ? "content  active-content" : "content"}>
                    <h4>Les opérations médicaux</h4>
                    <hr />
                    <br />
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Opération</th>
                            <th>Hopital</th>
                        </tr>
                        <tr>
                            <td>12/11/2021</td>
                            <td>Appendicite</td>
                            <td>Elona</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DossierMedical
