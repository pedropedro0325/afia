import { Outlet, useParams } from 'react-router-dom'
import './detailPatient.scss'

const DetailPatient = () => {
    const { id } = useParams()
    return (
        <div className='home-container'>
            <Outlet />
            <div className='details'>
                {id}
            </div>
        </div>
    )
}

export default DetailPatient
