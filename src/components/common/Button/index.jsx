import React from 'react'

import { Button } from './styles'

const CustomButton = ({ type = 'button', text = 'Click', onClick, disabled, children }) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {children || text}
    </Button>
  )
}

export default CustomButton
