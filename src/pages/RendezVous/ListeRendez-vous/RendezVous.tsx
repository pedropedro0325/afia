import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './rendezVous.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

const RendezVous = () => {
    const rendezVous = [
        { id: 1, nom: "Jhon", genre: "M", email: "jhon@gmail.com", date: "02/10/2022", condition: "Fièvre" },
        { id: 2, nom: "Jack", genre: "M", email: "jack@gmail.com", date: "02/09/2022", condition: "Maux de ventre" },
        { id: 3, nom: "Jimmy", genre: "M", email: "jimmy@gmail.com", date: "08/11/2022", condition: "Maux de tête" },
        { id: 4, nom: "Orline", genre: "F", email: "orline@gmail.com", date: "22/08/2022", condition: "Jambe cassée" },
        { id: 5, nom: "Rose", genre: "F", email: "rose@gmail.com", date: "02/11/2022", condition: "Bléssure musculaire" }
    ]
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='rendezVous-container'>
                    <h2>La liste des rendez-vous</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Rendez-vous</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche' />
                            </div>
                            <Link to={`/creer-un-rendez-vous`}>
                                <button className='btn-blue'>
                                    <FontAwesomeIcon icon={faPlus} className="i-plus" />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='table-patient'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Genre</th>
                                    <th>email</th>
                                    <th>date</th>
                                    <th>Blessure/Condition</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rendezVous.map((el) => (
                                        <tr>
                                            <td>{el.nom}</td>
                                            <td>{el.genre}</td>
                                            <td>{el.email}</td>
                                            <td>{el.date}</td>
                                            <td>{el.condition}</td>
                                            <td><Link to={`/detail-rendez-vous/${el.id}`}><button className='btn-blue'>voir</button></Link></td>
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

export default RendezVous
