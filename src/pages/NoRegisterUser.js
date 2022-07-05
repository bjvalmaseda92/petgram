import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { UserForm } from '../components/UserForm'

const NoRegisterUser = () => {
  const { activateAuth } = useContext(AppContext)
  return (
    <>
      <UserForm onSubmit={activateAuth} title='Registrarse' />
      <UserForm onSubmit={activateAuth} title='Iniciar sesion' />
    </>

  )
}

export { NoRegisterUser }
