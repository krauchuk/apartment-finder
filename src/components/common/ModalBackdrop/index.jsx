import React from 'react'

import { BackDrop } from './styles'

const ModalBackdrop = ({ show, children }) => {
  if (!show) {
    return children
  }

  return <BackDrop>{children}</BackDrop>
}

export default ModalBackdrop
