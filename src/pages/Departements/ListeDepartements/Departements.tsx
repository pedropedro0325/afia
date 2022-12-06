import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './departement.scss'

const Departements = () => {

    const [departement, setDepartement] = useState([
        { id: 1, departName: "Cardiologie", description: "Fournit des soins médicaux aux", dateDepart: "12-12-2021", ChefDepart: "Dr Woo", statut: "Active" },
        { id: 2, departName: "Ressource humaine", description: "Le rôle est de fournir un professionnel", dateDepart: "03-04-2022", ChefDepart: "Dr Karim", statut: "Active" },
        { id: 3, departName: "Gynécologue", description: "Enquête sur problèmes liés...", dateDepart: "12-11-2021", ChefDepart: "Dr Steve", statut: "Active" },
        { id: 4, departName: "Pharmacie", description: "Responsible for drugs in a hospital", dateDepart: "22-11-2021", ChefDepart: "Dr Sarah", statut: "Active" }
    ])

    const [search, setSearch] = useState('')

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='departement-container'>
                    <h2>La liste des départements</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Départements</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
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
                                    <th>Nom du département</th>
                                    <th>Description</th>
                                    <th>Date de département</th>
                                    <th>Chef de département</th>
                                    <th>Statut</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    departement.filter((el) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.departName.toLowerCase().includes(search)
                                    }).map((el: any) => (
                                        <tr key={el.id}>
                                            <td>{el.departName}</td>
                                            <td>{el.description}</td>
                                            <td>{el.dateDepart}</td>
                                            <td>{el.ChefDepart}</td>
                                            <td><button className='btn-statut'>{el.statut}</button></td>
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

export default Departements
