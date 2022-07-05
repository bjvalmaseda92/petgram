import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

const NoRegisterUser = () => {
  const { activateAuth } = useContext(AppContext)
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      activateAuth()
    }}
    >
      <button>Iniciar sesión</button>
    </form>
  )
}

export { NoRegisterUser }
