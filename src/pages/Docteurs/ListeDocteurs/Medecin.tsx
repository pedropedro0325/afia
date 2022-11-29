import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './medecin.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useMedecins } from '../../../hooks/medecins/useMedecins'

const Medecin = () => {

    const { error, loading, data } = useMedecins()

    console.log({ data });

    if (loading) return <div>...loading</div>
    if (error) return <div>something went wrong</div>

    const medecins = [
        { id: 1, nom: "Dr Sylvie", email: "sylvie@gmail.com", adresse: "19 solomom suisse", date: "22/11/2022", jour: "lundi", heure: "12h-13h" },
        { id: 2, nom: "Dr House", email: "house@gmail.com", adresse: "12 becker street londre", date: "22/11/2022", jour: "mardi", heure: "13h-13h" }
    ]
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='medecin-container'>
                    <h2>La liste des médecins</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Médecin</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche' />
                            </div>
                            <Link to={`/ajouter-un-medecin`}>
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
                                    <th>email</th>
                                    <th>Adresse</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.partakers.map((medecin: any) => (
                                        <tr key={medecin.id}>
                                            <td>{medecin.name}</td>
                                            <td>{medecin.email}</td>
                                            <td>{medecin.adressId}</td>
                                            <td><Link to={`/detail-medecin/${medecin.id}`}><button className='btn-blue'>voir</button></Link></td>
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
