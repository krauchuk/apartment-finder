import React from 'react'

import Image from '../common/Image'

function AdPreview({ data }) {
  return (
    <div>
      <span>{data.date}</span>
      <Image src={data.images[0]} />
      <div>
        <h3>{data.name}</h3>
        <span>{data.price}</span>
        <span>{data.type}</span>
        <span>{data.address}</span>
      </div>
    </div>
  )
}

export default AdPreview
