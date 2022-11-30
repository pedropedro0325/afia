import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
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
                    <NavLink to='/patient'><li><FontAwesomeIcon icon={faHospitalUser} className="i-plus" />Patients</li></NavLink>
                    <NavLink to='/medecin'><li><FontAwesomeIcon icon={faUserDoctor} className="i-plus" />Médecins</li></NavLink>
                    <NavLink to='/personnels'><li><FontAwesomeIcon icon={faUsers} className="i-plus" />Personnels</li></NavLink>
                    <NavLink to='/evenements'><li><FontAwesomeIcon icon={faCalendarDay} className="i-plus" />Evènements</li></NavLink>
                    <NavLink to='/agenda'><li><FontAwesomeIcon icon={faCalendarDays} className="i-plus" />L'Agenda</li></NavLink>
                </div>
            </div>
            <div className='bottom'>
                <h3>AFIA</h3>
            </div>
        </div>
    )
}

export default Sidebar
