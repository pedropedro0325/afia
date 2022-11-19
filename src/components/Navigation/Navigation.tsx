import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const Container = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Container
