import React from 'react'

const Image = ({ src, height, width }) => {
  return <img
    src={src}
    height={height || '100%'}
    width={width || '100%'}
    style="object-fit: cover"
  />
}

export default Image
