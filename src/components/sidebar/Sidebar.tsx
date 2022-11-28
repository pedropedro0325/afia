
import { NavLink } from 'react-router-dom'
import './sidebar.scss'

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div>
                <br />
                <div className='categories'>
                    <NavLink to='/rendez-vous'><li>Rendez-vous</li></NavLink>
                    <NavLink to='/patient'><li>Patients</li></NavLink>
                    <NavLink to='/medecin'><li>Médecins</li></NavLink>
                    <NavLink to='/personnels'><li>Personnels</li></NavLink>
                    <NavLink to='/agenda'><li>L'Agenda</li></NavLink>
                </div>
            </div>
            <div>
                lorem
            </div>
        </div>
    )
}

export default Sidebar
