import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faPersonBooth } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faPills } from '@fortawesome/free-solid-svg-icons'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import './sidebar.scss'

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div className='cate'>
                <div className='categories'>
                    <NavLink to='/patient'><li><FontAwesomeIcon icon={faHospitalUser} className="i-plus" />Patients</li></NavLink>
                    <NavLink to='/medecin'><li><FontAwesomeIcon icon={faUserDoctor} className="i-plus" />Médecins</li></NavLink>
                    <NavLink to='/personnels'><li><FontAwesomeIcon icon={faUsers} className="i-plus" />Personnels</li></NavLink>
                    <NavLink to='/postes'><li><FontAwesomeIcon icon={faList} className="i-plus" />Postes</li></NavLink>
                    <NavLink to='/evenements'><li><FontAwesomeIcon icon={faCalendarDay} className="i-plus" />Evènements</li></NavLink>
                    <NavLink to='/agenda'><li><FontAwesomeIcon icon={faCalendarDays} className="i-plus" />Agenda</li></NavLink>
                    <NavLink to='/salles'><li><FontAwesomeIcon icon={faPersonBooth} className="i-plus" />Salles</li></NavLink>
                    <NavLink to='/salle/types'><li><FontAwesomeIcon icon={faPersonBooth} className="i-plus" />Types de salles</li></NavLink>
                    <NavLink to='/facturation'><li><FontAwesomeIcon icon={faMoneyBill} className="i-plus" />Facturations</li></NavLink>
                    <NavLink to='/medicament'><li><FontAwesomeIcon icon={faPills} className="i-plus" />Médicaments</li></NavLink>
                    <NavLink to='/departement'><li><FontAwesomeIcon icon={faCodeBranch} className="i-plus" />Départements</li></NavLink>
                    <NavLink to='/actes'><li><FontAwesomeIcon icon={faCodeBranch} className="i-plus" />Actes</li></NavLink>
                    <NavLink to='/status'><li><FontAwesomeIcon icon={faCodeBranch} className="i-plus" />Statuts</li></NavLink>
                    <NavLink to='/specialites'><li><FontAwesomeIcon icon={faCodeBranch} className="i-plus" />Spécialités</li></NavLink>
                </div>
            </div>
            <div className='bottom'>
            </div>
        </div>
    )
}

export default Sidebar
