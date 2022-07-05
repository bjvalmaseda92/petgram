import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

const NoRegisterUser = () => {
  const { activateAuth } = useContext(AppContext)
  const { registerMutation, loading, error } = useRegisterMutation()
  const { login, loading: loadingLogin, error: errorLogin } = useLoginMutation()

  const handleRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables })
      .then(({ data }) => {
        const { singup } = data
        activateAuth(singup)
      })
  }

  const handleLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    login({ variables })
      .then(({ data }) => {
        const { login } = data
        activateAuth(login)
      })
  }
  const errorMsg = error && 'El usuario ya existe o hay algún problema.'
  const errorLoginMsg = errorLogin && 'El usuario ya existe o hay algún problema.'
  return (
    <>
      <UserForm onSubmit={handleRegister} disabled={loading} error={errorMsg} title='Registrarse' />
      <UserForm onSubmit={handleLogin} disabled={loadingLogin} error={errorLoginMsg} title='Iniciar sesion' />
    </>

  )
}

export { NoRegisterUser }
