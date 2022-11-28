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
            </div>
        </div>
    )
}

export default Home
