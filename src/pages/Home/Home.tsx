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

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='stats'>

                    <div className='parents'>
                        <div className='box'>
                            <div className='box-top'>
                                <div>
                                    <h3>34</h3>
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
                        <div className='box'>
                            <div className='box-top'>
                                <div>
                                    <h3>30</h3>
                                    <h4>Chambres</h4>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faBed} className="i-user" />
                                </div>
                            </div>
                            <div className='box-bot6'>.</div>
                        </div>
                        <div className='box'>
                            <div className='box-top'>
                                <div>
                                    <h3>8</h3>
                                    <h4>Opérations</h4>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faSquarePlus} className="i-user" />
                                </div>
                            </div>
                            <div className='box-bot7'>.</div>
                        </div>
                        <div className='box'>
                            <div className='box-top'>
                                <div>
                                    <h3>+50</h3>
                                    <h4>Médicaments</h4>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faKitMedical} className="i-user" />
                                </div>
                            </div>
                            <div className='box-bot9'>.</div>
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
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                            </tr>
                            <tr>
                                <td>Berglunds snabbköp</td>
                                <td>Christina Berglund</td>
                            </tr>
                            <tr>
                                <td>Centro comercial Moctezuma</td>
                                <td>Francisco Chang</td>
                            </tr>
                            <tr>
                                <td>Ernst Handel</td>
                                <td>Roland Mendel</td>
                            </tr>
                            <tr>
                                <td>Island Trading</td>
                                <td>Helen Bennett</td>
                            </tr>
                            <tr>
                                <td>Königlich Essen</td>
                                <td>Philip Cramer</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
