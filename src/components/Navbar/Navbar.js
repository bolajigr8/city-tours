import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

import { useGlobalContext } from '../../context'
import { CgMenuBoxed } from 'react-icons/cg'
const Navbar = () => {
  const { openSidebar } = useGlobalContext()
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <NavLink to='/'>
          <div className='nav-title'>
            <div>City</div>
            <div>tours</div>
          </div>
        </NavLink>
        <div>
          <CgMenuBoxed onClick={openSidebar} className='nav-btn' />
        </div>

        <ul className='nav-links'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'nav-link nav-active' : 'nav-link'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'nav-link nav-active' : 'nav-link'
              }
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/tours'
              className={({ isActive }) =>
                isActive ? 'nav-link nav-active' : 'nav-link'
              }
            >
              tours
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
