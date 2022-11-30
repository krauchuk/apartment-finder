import React from 'react'

import { Select } from './styles'

const CustomSelect = ({ name, placeholder = '', value, options, onChange, disabled }) => {
  return (
    <Select name={name} value={value} placeholder={placeholder} onChange={onChange} disabled={disabled}>
      {options.map(o => (
        <option key={o.value} value={o.value}>
          {o.text}
        </option>
      ))}
    </Select>
  )
}

export default CustomSelect
