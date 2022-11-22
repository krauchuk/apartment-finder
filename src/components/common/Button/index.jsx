import React from 'react'

import { Button } from './styles'

const CustomButton = ({ type = 'button', text = 'Click', onClick, disabled }) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  )
}

export default CustomButton
