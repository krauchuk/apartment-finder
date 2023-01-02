import React from 'react'

import Button from '../Button'
import { Container, Close } from './styles'

const Modal = ({ show, onClose, children }) => {
  if (!show) return null

  return (
    <Container>
      {children}
      <Close>
        <Button onClick={onClose}>X</Button>
      </Close>
    </Container>
  )
}

export default Modal
