import React from 'react'
import { Outlet } from 'react-router-dom'
import './prendreRendezVous.scss'

const PrendreRendezVous = () => {
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='prendreRendezVous-container'>
                    <h2>Créer un rendez-vous</h2>
                    <br />
                    <div className='form'>
                        <div className='control'>
                            <div>
                                <label htmlFor="">Nom*</label><br />
                                <input type="text" className='input' placeholder='Jhon' />
                            </div>
                            <div>
                                <label htmlFor="">Prénom*</label><br />
                                <input type="text" className='input' placeholder='Doe' />
                            </div>
                        </div>
                        <div className='control'>
                            <div>
                                <label htmlFor="">Femme</label>
                                <input type="radio" className='radio' id='f' value='f' checked />
                            </div>
                            <div>
                                <label htmlFor="">Homme</label>
                                <input type="radio" className='radio' id='h' value='h' />
                            </div>
                        </div>
                        <div className='control'>
                            <div>
                                <label htmlFor="">Date*</label><br />
                                <input type="date" className='input' />
                            </div>
                            <div>
                                <label htmlFor="">Heure*</label><br />
                                <input type="time" className='input' />
                            </div>
                        </div>
                        <div className='control'>
                            <div>
                                <label htmlFor="">Téléphone*</label><br />
                                <input type="text" className='input' placeholder='+212 3 454 345 12' />
                            </div>
                            <div>
                                <label htmlFor="">Email</label><br />
                                <input type="text" className='input' placeholder='jhon@gmail.com' />
                            </div>
                        </div>
                        <div className='control'>
                            <div>
                                <label htmlFor="">Médecin</label><br />
                                <select name="" className='input'>
                                    <option value="Silvy">Dr Silvy</option>
                                    <option value="Bnner">Dr Banner</option>
                                    <option value="Selvig">Dr Selvig</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Condition</label><br />
                                <input type="text" className='input' placeholder='Fièvre' />
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

export default PrendreRendezVous
