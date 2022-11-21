import React from 'react'
import { Outlet } from 'react-router-dom'
import './medecin.scss'

const Medecin = () => {
    const medecins = [
        { id: 1, nom: "Dr Sylvie", email: "sylvie@gmail.com", adresse: "19 solomom suisse", date: "22/11/2022", jour: "lundi", heure: "12h-13h" },
        { id: 2, nom: "Dr House", email: "house@gmail.com", adresse: "12 becker street londre", date: "22/11/2022", jour: "mardi", heure: "13h-13h" }
    ]
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='medecin-container'>
                    <nav>
                        <button>+ Ajouter un médecin</button>
                    </nav>
                    <h3>La liste des médecins</h3>
                    <div className='table-patient'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>email</th>
                                    <th>Adresse</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    medecins.map((medecin) => (
                                        <tr>
                                            <td>{medecin.nom}</td>
                                            <td>{medecin.email}</td>
                                            <td>{medecin.adresse}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Medecin
