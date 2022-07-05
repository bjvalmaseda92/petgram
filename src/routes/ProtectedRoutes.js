import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { NoRegisterUser } from '../pages/NoRegisterUser'

const ProtectedRoutes = ({ children }) => {
  const { isAuth } = useContext(AppContext)
  if (!isAuth) {
    return (<NoRegisterUser />)
  }
  return children
}

export { ProtectedRoutes }
