import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false)

  return (
    <AppContext.Provider value={{ isSidebar, setIsSidebar }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export default useAppContext
