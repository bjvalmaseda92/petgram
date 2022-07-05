import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

const NoRegisterUser = () => {
  const { activateAuth } = useContext(AppContext)
  const { registerMutation, loading, error } = useRegisterMutation()

  const handleRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables })
      .then(activateAuth)
  }
  const errorMsg = error && 'El usuario ya existe o hay algún problema.'
  return (
    <>
      <UserForm onSubmit={handleRegister} disabled={loading} error={errorMsg} title='Registrarse' />
      <UserForm onSubmit={activateAuth} title='Iniciar sesion' />
    </>

  )
}

export { NoRegisterUser }
