import React, { useContext, useState } from 'react'
import { links } from '../utils/constant'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false)
  const [isSubmenu, setIsSubmenu] = useState(false)
  const [link, setLink] = useState([])
  const [location, setLocation] = useState({})
  const [ref, setRef] = useState({})

  const { user, isAuthenticated, isLoading } = useAuth0()

  const isUser = user && isAuthenticated

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
    <UserContext.Provider
      value={{
        isSidebar,
        setIsSidebar,
        openSubmenu,
        location,
        link,
        isSubmenu,
        closeSubmenu,
        isUser,
        isLoading,
        user,
        ref,
        setRef,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => {
  return useContext(UserContext)
}

export default useUserContext
