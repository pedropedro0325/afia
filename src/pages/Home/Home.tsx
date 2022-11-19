import { Outlet } from 'react-router-dom'
import './home.scss'

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='stats'>
                    <div className='parents'>
                        <div className='box'>Patients</div>
                        <div className='box'>Consultations</div>
                        <div className='box'>Salles</div>
                        <div className='box'>Médecins</div>
                        <div className='box'>Infermières</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
