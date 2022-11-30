import React from 'react'
import { Outlet } from 'react-router-dom'
import './ajouterEvent.scss'

const AjouterEvent = () => {
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterEvent-container'>
                    <h2>Ajouter un évènement</h2>
                    <br />
                    <div className='form'>
                        <div className='control'>
                            <div>
                                <input type="text" className='input' placeholder='Nom*' />
                            </div>
                            <div>
                                <input type="text" className='input' placeholder='Prénom*' />
                            </div>
                        </div>
                        <div className='control'>
                            <div>
                                <label htmlFor="">Date de début*</label><br />
                                <input type="date" className='input' placeholder='Date du début*' />
                            </div>
                            <div>
                                <label htmlFor="">Date de fin*</label><br />
                                <input type="date" className='input' placeholder='Date de fin*' />
                            </div>
                        </div>
                        <div className='control'>
                            <div>
                                <select className='input' placeholder='Genre*'>
                                    <option value="homme">Homme</option>
                                    <option value="femme">Femme</option>
                                </select>
                            </div>
                            <div>
                                <input type="text" className='input' placeholder='Description*' />
                            </div>
                        </div>
                        <div className='save'>
                            <div>
                                <button className='btn-save'>Enrégistrer</button>
                            </div>
                            <div>
                                <button className='btn-cancel'>Annuler</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AjouterEvent
