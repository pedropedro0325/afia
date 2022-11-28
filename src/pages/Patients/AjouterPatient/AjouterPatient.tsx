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
                                <label>Nom</label>
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Prénom</label>
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Titre</label>
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Cpi identité</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='card adresse'>
                            <h3>Adresse personnelle</h3>
                            <div className='control'>
                                <label>Adresse</label>
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Ville</label>
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Pays</label>
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Téléphone</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className='form-bottom'>
                        <div className='card etat-civil'>
                            <h3>Etat civil</h3>
                            <div className='control'>
                                <label>Né(e) le</label>
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Lieu</label>
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Pays</label>
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Nationalité</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='card complement'>
                            <h3>Informations complémentaires</h3>
                            <div className='control'>
                                <label>Email</label>
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Profession</label>
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Nom du père</label>
                                <input type="text" />
                            </div>
                            <div className='control'>
                                <label>Nom de la mère</label>
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
