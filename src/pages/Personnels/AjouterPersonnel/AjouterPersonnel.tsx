import React from 'react'
import { Outlet } from 'react-router-dom'
import './ajouterPersonnel.scss'

const AjouterPersonnel = () => {
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='ajouterPersonnel-container'>
                    <h2>Ajouter un personnel</h2>
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
                                <input type="text" className='input' placeholder='Téléphone*' />
                            </div>
                            <div>
                                <input type="text" className='input' placeholder='Email*' />
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
                                <input type="text" className='input' placeholder='Adresse*' />
                            </div>
                        </div>
                        <div className='control'>
                            <div>
                                <input type="text" className='input' placeholder='Poste*' />
                            </div>
                            <div>
                                <select name="" className='input' placeholder='Département*'>
                                    <option value="Infimerie">Infirmerir</option>
                                </select>
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

export default AjouterPersonnel
