import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import React, { useState } from 'react'

const Container = () => {

    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState)
    }

    return (
        <div>
            <Navbar openSidebar={toggleSidebar} />
            <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Container
