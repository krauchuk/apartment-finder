import React from 'react'

import { Button } from './styles'

const CustomButton = ({ type = 'button', text = 'Click', onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  )
}

export default CustomButton
