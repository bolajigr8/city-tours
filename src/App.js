import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// pages
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
import About from './pages/About'
import Tours from './pages/Tours'
import Error from './pages/Error'
import Sidebar from './components/Sidebar/Sidebar'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/tours' element={<Tours />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
