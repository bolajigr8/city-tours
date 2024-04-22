import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const SharedLayout = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default SharedLayout
