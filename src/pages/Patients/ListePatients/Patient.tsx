
import { Outlet, Link } from 'react-router-dom'
import './patient.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

const Patient = () => {
    const patients = [
        { id: 1, nom: "Jhon", genre: "M", email: "jhon@gmail.com", adresse: "19 solomom suisse", traitement: "Fièvre" },
        { id: 2, nom: "Jack", genre: "M", email: "jack@gmail.com", adresse: "12 becker street londre", traitement: "Bléssure" },
        { id: 3, nom: "Jimmy", genre: "M", email: "jimmy@gmail.com", adresse: "12 becker street londre", traitement: "Entorse" },
        { id: 4, nom: "Orline", genre: "F", email: "orline@gmail.com", adresse: "12 becker street londre", traitement: "Maux de tête" },
        { id: 5, nom: "Rose", genre: "F", email: "rose@gmail.com", adresse: "12 becker street londre", traitement: "Malaria" }
    ]
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='patient-container'>
                    <h2>La liste des patients</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Patients</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche' />
                            </div>
                            <Link to={`/ajouter-un-patient`}>
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
                                    <th>Adresse</th>
                                    <th>Traitement</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    patients.map((patient) => (
                                        <tr>
                                            <td>{patient.nom}</td>
                                            <td>{patient.genre}</td>
                                            <td>{patient.email}</td>
                                            <td>{patient.adresse}</td>
                                            <td>{patient.traitement}</td>
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
