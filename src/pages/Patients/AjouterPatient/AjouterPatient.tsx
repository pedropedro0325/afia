import React from 'react'
import { Outlet } from 'react-router-dom'
import './ajouterPatient.scss'

const AjouterPatient = () => {
    return (
        <div className='home-container'>
            <Outlet />
            <div className='add-patient'>
                <h2>Enrégistrer un patient</h2>
                <div className='form'>
                    <div className='form-top'>
                        <div className='card identite'>
                            <h3>Identité</h3>
                            <div className='control'>
                                <label>Nom</label><br />
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Prénom</label><br />
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Titre</label><br />
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Cpi identité</label><br />
                                <input type="text" />
                            </div>
                        </div>
                        <div className='card adresse'>
                            <h3>Adresse personnelle</h3>
                            <div className='control'>
                                <label>Adresse</label><br />
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Ville</label><br />
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Pays</label><br />
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Téléphone</label><br />
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className='form-bottom'>
                        <div className='card etat-civil'>
                            <h3>Etat civil</h3>
                            <div className='control'>
                                <label>Né(e) le</label><br />
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Lieu</label><br />
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Pays</label><br />
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Nationalité</label><br />
                                <input type="text" />
                            </div>
                        </div>
                        <div className='card complement'>
                            <h3>Informations complémentaires</h3>
                            <div className='control'>
                                <label>Email</label><br />
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Profession</label><br />
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Nom du père</label><br />
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Nom de la mère</label><br />
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <button className='btn-save'>Enrégistrer</button>
                </div>
            </div>
        </div>
    )
}

export default AjouterPatient
