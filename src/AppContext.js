import React, { createContext, useState } from 'react'
const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => (window.sessionStorage.getItem('token')))

  const value = {
    isAuth,
    activateAuth: token => {
      window.sessionStorage.setItem('token', token)
      setIsAuth(token)
    }
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
