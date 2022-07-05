import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

const NoRegisterUser = () => {
  const { activateAuth } = useContext(AppContext)
  const { registerMutation } = useRegisterMutation()

  const handleRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables })
      .then(activateAuth)
  }
  return (
    <>
      <UserForm onSubmit={handleRegister} title='Registrarse' />
      <UserForm onSubmit={activateAuth} title='Iniciar sesion' />
    </>

  )
}

export { NoRegisterUser }
