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
import { faBacterium } from '@fortawesome/free-solid-svg-icons'
import { faSignal } from '@fortawesome/free-solid-svg-icons'
import './sidebar.scss'
import { useTranslation } from 'react-i18next'

const Sidebar = ({ sidebar, closeSidebar }: any) => {

    const { t } = useTranslation()
    return (
        <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
            <div className='cate'>
                <div className='categories'>

                    <NavLink onClick={closeSidebar} to='/patients'><li><FontAwesomeIcon icon={faHospitalUser} className="i-plus" />{t('patients')}</li></NavLink>
                    <NavLink onClick={closeSidebar} to='/medecins'><li><FontAwesomeIcon icon={faUserDoctor} className="i-plus" />{t('medecins')}</li></NavLink>
                    <NavLink onClick={closeSidebar} to='/personnels'><li><FontAwesomeIcon icon={faUsers} className="i-plus" />{t('personnels')}</li></NavLink>
                    <NavLink onClick={closeSidebar} to='/postes'><li><FontAwesomeIcon icon={faList} className="i-plus" />{t('postes')}</li></NavLink>
                    <NavLink onClick={closeSidebar} to='/evenements'><li><FontAwesomeIcon icon={faCalendarDay} className="i-plus" />{t('evenements')}</li></NavLink>
                    <NavLink onClick={closeSidebar} to='/calendrier'><li><FontAwesomeIcon icon={faCalendarDays} className="i-plus" />{t('agenda')}</li></NavLink>
                    <NavLink onClick={closeSidebar} to='/salles'><li><FontAwesomeIcon icon={faPersonBooth} className="i-plus" />{t('salles')}</li></NavLink>
                    {/* <NavLink onClick={closeSidebar} to='/salle/types'><li><FontAwesomeIcon icon={faPersonBooth} className="i-plus" />{t('tysalles')}</li></NavLink> */}
                    <NavLink onClick={closeSidebar} to='/facturation'><li><FontAwesomeIcon icon={faMoneyBill} className="i-plus" />{t('facturations')}</li></NavLink>
                    <NavLink onClick={closeSidebar} to='/medicament'><li><FontAwesomeIcon icon={faPills} className="i-plus" />{t('medicaments')}</li></NavLink>
                    <NavLink onClick={closeSidebar} to='/departement'><li><FontAwesomeIcon icon={faCodeBranch} className="i-plus" />{t('departements')}</li></NavLink>
                    <NavLink onClick={closeSidebar} to='/actes'><li><FontAwesomeIcon icon={faBacterium} className="i-plus" />{t('actes')}</li></NavLink>
                    <NavLink onClick={closeSidebar} to='/status'><li><FontAwesomeIcon icon={faSignal} className="i-plus" />{t('statuts')}</li></NavLink>
                    <NavLink onClick={closeSidebar} to='/specialites'><li><FontAwesomeIcon icon={faFolder} className="i-plus" />{t('specialites')}</li></NavLink>
                </div>
            </div>
            <div className='bottom'>
            </div>
        </div>
    )
}

export default Sidebar
