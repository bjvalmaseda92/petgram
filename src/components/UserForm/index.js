import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Form, Input, Title } from './style'

const UserForm = ({ onSubmit, title }) => {
  const password = useInputValue('')
  const email = useInputValue('')

  const handleForm = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleForm}>
        <Input type='text' placeholder='Email' {...email} />
        <Input type='password' placeholder='Password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>

  )
}

export { UserForm }
