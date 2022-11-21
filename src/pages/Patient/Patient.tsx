import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './patient.scss'

const Patient = () => {
    const patients = [
        { id: 1, nom: "Jhon", email: "jhon@gmail.com", adresse: "19 solomom suisse" },
        { id: 2, nom: "Jack", email: "jack@gmail.com", adresse: "12 becker street londre" }
    ]
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='patient-container'>
                    <nav>
                        <button>+ Ajouter un patient</button>
                    </nav>
                    <h3>La liste des patients</h3>
                    <div className='table-patient'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>email</th>
                                    <th>Adresse</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    patients.map((patient) => (
                                        <tr>
                                            <td>{patient.nom}</td>
                                            <td>{patient.email}</td>
                                            <td>{patient.adresse}</td>
                                            <td><Link to={`/detail-patient/${patient.id}`}><button className='btn-blue'>voir</button></Link></td>
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

export default Patient
