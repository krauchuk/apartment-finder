import React from 'react'

import { Input } from './styles'

const CustomInput = ({ name, type = 'text', placeholder, onChange, value }) => {
  return <Input name={name} type={type} placeholder={placeholder} onChange={onChange} value={value} />
}

export default CustomInput
