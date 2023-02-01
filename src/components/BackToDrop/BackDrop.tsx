import React from 'react'
import './backDrop.scss'
import { Outlet } from 'react-router-dom'

const BackDrop = ({ sidebar, closeSidebar }: any) => {
  return (
    <div>
      <div className={sidebar ? "backdrop backdrop--open" : "backdrop"} onClick={closeSidebar}></div>
    </div>
  )
}

export default BackDrop
