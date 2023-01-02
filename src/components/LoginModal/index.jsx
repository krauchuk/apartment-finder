import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Modal from '../common/Modal'
import Input from '../common/Input'
import Button from '../common/Button'
import actions from '../../actions'
import { Title, Form } from './styles'

const LoginModal = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.app.modals.login)
  const loading = useSelector(state => state.app.loading)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const closeHandler = () => dispatch({ type: actions.TOGGLE_MODAL, payload: 'login' })
  const loginHandler = event => {
    if (event) event.preventDefault()
    if (username && password) {
      dispatch({ type: actions.LOGIN, payload: { username, password } })
    }
  }

  return (
    <Modal show={show} onClose={closeHandler}>
      <Title>Login</Title>
      <Form onSubmit={loginHandler}>
        <Input
          value={username}
          onChange={event => setUsername(event.target.value)}
          placeholder="Username"
          disabled={loading}
          autoFocus
        />
        <Input
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
          disabled={loading}
        />
        <Button onClick={loginHandler} type="submit" disabled={loading}>
          Log In
        </Button>
      </Form>
    </Modal>
  )
}

export default LoginModal
