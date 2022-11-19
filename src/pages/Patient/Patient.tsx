
import { Outlet } from 'react-router-dom'
import './patient.scss'

const Patient = () => {
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='patient-container'>
                    <nav>
                        <button>+ Ajouter un patient</button>
                    </nav>
                    <h3>La liste des patients</h3>
                    <div className='table-patient'>
                        <table>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Adresse</th>
                            </tr>
                            <tr>
                                <td>Peter</td>
                                <td>Griffin</td>
                                <td>Gironde 20</td>
                            </tr>
                            <tr>
                                <td>Lois</td>
                                <td>Griffin</td>
                                <td>Gironde 20</td>
                            </tr>
                            <tr>
                                <td>Joe</td>
                                <td>Swanson</td>
                                <td>Gironde 20</td>
                            </tr>
                            <tr>
                                <td>Cleveland</td>
                                <td>Brown</td>
                                <td>Gironde 20</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Patient
