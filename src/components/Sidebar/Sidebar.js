import React from 'react'
import { useGlobalContext } from '../../context'
import { NavLink } from 'react-router-dom'
import './Sidebar.scss'
import { FaTimes } from 'react-icons/fa'
import { BiHome } from 'react-icons/bi'
import { PiAirplaneTakeoff } from 'react-icons/pi'
import { SlList } from 'react-icons/sl'
import { BsBackpack } from 'react-icons/bs'
const Sidebar = () => {
  const { cl, closeSidebar, isSidebarOpen } = useGlobalContext()
  const currentYear = new Date().getFullYear()
  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper '
      }`}
    >
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <article>
          <NavLink
            to='/'
            onClick={closeSidebar}
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            <span>
              <BiHome />
            </span>
            home
          </NavLink>
          <NavLink
            to='/tours'
            onClick={closeSidebar}
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            <span>
              <PiAirplaneTakeoff />
            </span>
            tours
          </NavLink>
          <ul>
            <li>city tours</li>
            <li>food tours</li>
            <li>day trips</li>
            <li>adventure</li>
          </ul>
          <NavLink
            to='/about'
            onClick={closeSidebar}
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            <span>
              <BsBackpack />
            </span>
            about
          </NavLink>
        </article>
        <div className='sidebar-info'>
          <p>
            copywright @ <span>{currentYear}</span> bolaji adebayo. all rights
            reserved
          </p>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
