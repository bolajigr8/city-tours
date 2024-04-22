import React, { createContext, useContext, useState } from 'react'
import { tourData } from './tourData'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const cl = console.log.bind(console)
  const [isSidebarOpen, setSidebar] = useState(false)
  const [data, setData] = useState(tourData)

  const deleteItem = (id) => {
    const newItems = data.filter((item) => item.id !== id)
    setData(newItems)
  }

  const openSidebar = () => {
    setSidebar(true)
  }
  const closeSidebar = () => {
    setSidebar(false)
  }

  return (
    <AppContext.Provider
      value={{
        cl,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        deleteItem,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
