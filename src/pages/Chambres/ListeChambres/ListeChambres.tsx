import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './chambre.scss'

const ListeChambres = () => {
    const [chambre, setChambre] = useState([
        { id: 1, NomPatient: "Jiji", sexe: "F", DateAdmission: "12-12-2021", DateSortie: "16-12-2021" },
        { id: 2, NomPatient: "Jhon", sexe: "M", DateAdmission: "03-04-2022", DateSortie: "06-04-2022" },
        { id: 3, NomPatient: "Jean", sexe: "M", DateAdmission: "12-11-2021", DateSortie: "16-11-2021" },
        { id: 4, NomPatient: "Jane", sexe: "F", DateAdmission: "22-11-2021", DateSortie: "26-11-2022" }
    ])
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='chambre-container'>
                    <h2>La liste des chambres</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Chambres</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche' />
                            </div>
                            {/* <Link to={`/ajouter-un-evenement`}>
                                <button className='btn-blue'>
                                    <FontAwesomeIcon icon={faPlus} className="i-plus" />
                                </button>
                            </Link> */}
                        </div>
                    </div>
                    <div className='table-patient'>
                        <table>
                            <thead>
                                <tr>
                                    <th>N° de chambre</th>
                                    <th>Nom du patient</th>
                                    <th>Sexe</th>
                                    <th>Date d'admission</th>
                                    <th>Date de sortie</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    chambre.map((el: any) => (
                                        <tr key={el.id}>
                                            <td>{el.id}</td>
                                            <td>{el.NomPatient}</td>
                                            <td>{el.sexe}</td>
                                            <td>{el.DateAdmission}</td>
                                            <td>{el.DateSortie}</td>
                                            <td><button className='btn-blue'><FontAwesomeIcon icon={faTrash} className="i-plus" /></button></td>
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

export default ListeChambres
