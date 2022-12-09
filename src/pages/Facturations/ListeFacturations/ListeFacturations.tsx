import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './facturation.scss'

const ListeFacturations = () => {

    const [facture, setFacture] = useState([
        { id: 1, NomPatient: "Jiji", admissionId: "JI1234", docteurName: "Silvy", status: "Payé", Date: "12-12-2021", tva: "12%", total: "142$" },
        { id: 2, NomPatient: "Jhon", admissionId: "H123I3", docteurName: "Selvig", status: "Non payé", Date: "03-04-2022", tva: "12%", total: "124$" },
        { id: 3, NomPatient: "Jean", admissionId: "M7685D", docteurName: "Sarah", status: "Payé", Date: "12-11-2021", tva: "12%", total: "200$" },
        { id: 4, NomPatient: "Jane", admissionId: "FAZ345", docteurName: "Jack", status: "Non payé", Date: "22-11-2021", tva: "12%", total: "100$" }
    ])

    const [search, setSearch] = useState('')

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='facturation-container'>
                    <h2>La liste des factures</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Facturations</h4>
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
                                    <th>Nom du patient</th>
                                    <th>Admission ID</th>
                                    <th>Nom du docteur</th>
                                    <th>Statut</th>
                                    <th>Date</th>
                                    <th>TVA</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    facture.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.NomPatient.toLowerCase().includes(search)
                                    }).map((el: any) => (
                                        <tr key={el.id}>
                                            <td>{el.NomPatient}</td>
                                            <td>{el.admissionId}</td>
                                            <td>{el.docteurName}</td>
                                            <td><button className='btn-statut'>{el.status}</button></td>
                                            <td>{el.Date}</td>
                                            <td>{el.tva}</td>
                                            <td>{el.total}</td>
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

export default ListeFacturations
