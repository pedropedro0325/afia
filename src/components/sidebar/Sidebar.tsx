import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import './sidebar.scss'

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div>
                <br />
                <div className='categories'>
                    <NavLink to='/rendez-vous'><li>Rendez-vous<FontAwesomeIcon icon={faPlus} className="i-plus" /></li></NavLink>
                    <NavLink to='/patient'><li>Patients<FontAwesomeIcon icon={faHospitalUser} className="i-plus" /></li></NavLink>
                    <NavLink to='/medecin'><li>Médecins<FontAwesomeIcon icon={faUserDoctor} className="i-plus" /></li></NavLink>
                    <NavLink to='/personnels'><li>Personnels<FontAwesomeIcon icon={faUsers} className="i-plus" /></li></NavLink>
                    <NavLink to='/agenda'><li>L'Agenda<FontAwesomeIcon icon={faCalendarDays} className="i-plus" /></li></NavLink>
                </div>
            </div>
            <div className='bottom'>
                <h3>AFIA</h3>
            </div>
        </div>
    )
}

export default Sidebar
