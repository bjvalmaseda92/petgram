import React from 'react'
import { NoRegisterUser } from '../pages/NoRegisrerUser'

const ProtectedRoutes = ({ isAuth = true, children }) => {
  if (!isAuth) {
    return (<NoRegisterUser />)
  }
  return children
}

export { ProtectedRoutes }
