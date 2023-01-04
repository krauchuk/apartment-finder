import React from 'react'

import { Star } from './styles'

const Rating = ({ value, size = 14 }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map(r => (
        <Star key={r} $active={r <= value} $size={size} />
      ))}
    </div>
  )
}

export default Rating
