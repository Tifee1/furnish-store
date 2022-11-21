import React, { useContext, useState } from 'react'
import { links } from '../utils/constant'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false)
  const [isSubmenu, setIsSubmenu] = useState(false)
  const [link, setLink] = useState([])
  const [location, setLocation] = useState({})

  const openSubmenu = (center, bottom, text) => {
    setIsSubmenu(true)
    setLocation({ center, bottom })
    const page = links.find((item) => item.label === text)
    setLink(page.items)
  }

  const closeSubmenu = () => {
    setIsSubmenu(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebar,
        setIsSidebar,
        openSubmenu,
        location,
        link,
        isSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export default useAppContext
