import React from 'react'

import Image from '../common/Image'

const AdPreview = ({ data }) => {
  return <div>
    <span>{data.date}</span>
    <Image src={data.image} />
    <div>
      <h3>{data.name}</h3>
      <span>{data.price}</span>
      <span>{data.type}</span>
      <span>{data.address}</span>
    </div>
  </div>
}

export default AdPreview
