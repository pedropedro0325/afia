import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './listePersonnel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

const ListePersonnel = () => {
    const personnels = [
        { id: 1, nom: "Jhon", genre: "M", email: "jhon@gmail.com", date: "02/10/2022", poste: "Réceptionniste" },
        { id: 2, nom: "Jack", genre: "M", email: "jack@gmail.com", date: "02/09/2022", poste: "Infirmier" },
        { id: 3, nom: "Jimmy", genre: "M", email: "jimmy@gmail.com", date: "08/11/2022", poste: "Pharmacien" },
        { id: 4, nom: "Orline", genre: "F", email: "orline@gmail.com", date: "22/08/2022", poste: "Infermière" },
        { id: 5, nom: "Rose", genre: "F", email: "rose@gmail.com", date: "02/11/2022", poste: "Assistante de laboratoire" }
    ]
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='personnel-container'>
                    <h2>La liste des personnels</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Personnels</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche' />
                            </div>
                            <Link to={`/ajouter-un-personnel`}>
                                <button className='btn-blue'>
                                    <FontAwesomeIcon icon={faPlus} className="i-plus" />
                                </button>
                            </Link>
                            <button className='btn-blue'>
                                <FontAwesomeIcon icon={faRotateRight} className="i-plus" />
                            </button>
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
                                    <th>Poste</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    personnels.map((el) => (
                                        <tr>
                                            <td>{el.nom}</td>
                                            <td>{el.genre}</td>
                                            <td>{el.email}</td>
                                            <td>{el.date}</td>
                                            <td>{el.poste}</td>
                                            <td><Link to={`/detail-personnel/${el.id}`}><button className='btn-blue'>voir</button></Link></td>
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

export default ListePersonnel
