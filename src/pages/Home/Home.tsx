import { Outlet } from 'react-router-dom'
import './home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faUserNurse } from '@fortawesome/free-solid-svg-icons'
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { faKitMedical } from '@fortawesome/free-solid-svg-icons'
import { usePatients } from '../../hooks/Patients/usePatients'
import { useState } from 'react'
import { useMedecins } from '../../hooks/medecins/useMedecins'

const Home = () => {

    const { error, loading, data } = useMedecins()

    console.log(data);


    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='stats'>

                    <div className='parents'>
                        <div className='box'>
                            <div className='box-top'>
                                <div>
                                    <h3>12</h3>
                                    <h4>Patients</h4>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faUser} className="i-user" />
                                </div>
                            </div>
                            <div className='box-bot1'>.</div>
                        </div>
                        <div className='box'>
                            <div className='box-top'>
                                <div>
                                    <h3>18</h3>
                                    <h4>Médecins</h4>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faUserDoctor} className="i-user" />
                                </div>
                            </div>
                            <div className='box-bot2'>.</div>
                        </div>
                        <div className='box'>
                            <div className='box-top'>
                                <div>
                                    <h3>25</h3>
                                    <h4>Infermiers</h4>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faUserNurse} className="i-user" />
                                </div>
                            </div>
                            <div className='box-bot3'>.</div>
                        </div>
                        <div className='box'>
                            <div className='box-top'>
                                <div>
                                    <h3>28</h3>
                                    <h4>Consultations</h4>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faNotesMedical} className="i-user" />
                                </div>
                            </div>
                            <div className='box-bot4'>.</div>
                        </div>
                    </div>
                </div>
                <div className='table-stats'>
                    <div className='reserve'>
                        <h3>Rendez-vous réserver</h3>
                        <table id="customers">
                            <tr>
                                <th>Patients</th>
                                <th>Médecin assigner</th>
                                <th>Conditions</th>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td>Berglunds snabbköp</td>
                                <td>Christina Berglund</td>
                                <td>Sweden</td>
                            </tr>
                            <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                            </tr>
                            <tr>
                                <td>Ernst Handel</td>
                                <td>Roland Mendel</td>
                                <td>Austria</td>
                            </tr>
                            <tr>
                                <td>Island Trading</td>
                                <td>Helen Bennett</td>
                                <td>UK</td>
                            </tr>
                            <tr>
                                <td>Königlich Essen</td>
                                <td>Philip Cramer</td>
                                <td>Germany</td>
                            </tr>
                        </table>
                    </div>
                    <div className='dr'>
                        <h3>Liste de docteurs</h3>
                        <table id="customers">
                            <tr>
                                <th>Nom</th>
                                <th>Statut</th>
                            </tr>
                            <tbody>
                                {/* {
                                    data.partakers.filter((curDate: any) => {
                                        return curDate.partakerType?.description === 'Médecin'
                                    }).map((medecin: any) => (
                                        <tr key={medecin.id}>
                                            <td>{medecin.name}</td>
                                            <td>Disponible</td>
                                        </tr>
                                    ))
                                } */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
