import React from 'react'

import { Select } from './styles'

function CustomSelect({ name, placeholder = '', value, options, onChange }) {
  return (
    <Select name={name} value={value} placeholder={placeholder} onChange={onChange}>
      {options.map(o => (
        <option key={o.value} value={o.value}>
          {o.text}
        </option>
      ))}
    </Select>
  )
}

export default CustomSelect
