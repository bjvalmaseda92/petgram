import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
const User = () => {
  const { desactivateAuth } = useContext(AppContext)
  return (
    <>
      <h1>User</h1>
      <button onClick={desactivateAuth}>Cerrar sesion</button>
    </>
  )
}

export { User }
