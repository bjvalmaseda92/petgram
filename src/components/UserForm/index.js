import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Error, Form, Input, Title } from './style'

const UserForm = ({ onSubmit, title, error, disabled }) => {
  const password = useInputValue('')
  const email = useInputValue('')

  const handleForm = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  return (
    <>
      <Form disabled={disabled} onSubmit={handleForm}>
        <Title>{title}</Title>
        <Input disabled={disabled} type='text' placeholder='Email' {...email} />
        <Input disabled={disabled} type='password' placeholder='Password' {...password} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>

  )
}

export { UserForm }
