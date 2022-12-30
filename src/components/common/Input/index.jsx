import React from 'react'

import { Input } from './styles'

const CustomInput = ({ name, type = 'text', placeholder, onChange, value, autoFocus, disabled }) => {
  return (
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      autoFocus={autoFocus}
      disabled={disabled}
    />
  )
}

export default CustomInput
