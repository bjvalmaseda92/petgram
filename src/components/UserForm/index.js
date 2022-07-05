import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Form, Input, Title } from './style'

const UserForm = ({ onSubmit, title }) => {
  const password = useInputValue('')
  const email = useInputValue('')
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
      >
        <Input type='text' placeholder='Email' {...email} />
        <Input type='text' placeholder='Password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>

  )
}

export { UserForm }
