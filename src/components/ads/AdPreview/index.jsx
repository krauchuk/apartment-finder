import React from 'react'

import Image from '../../common/Image'

import { Wrapper, AdDate, InfoBlock, AdName, AdPrice, AdType, AdAddress } from './styles'

function AdPreview({ data }) {
  return (
    <Wrapper>
      <AdDate>{data.date}</AdDate>
      <Image src={data.images[0]} />
      <InfoBlock>
        <AdName>{data.name}</AdName>
        <AdPrice>{data.price}</AdPrice>
        <AdType>{data.type}</AdType>
        <AdAddress>{data.address}</AdAddress>
      </InfoBlock>
    </Wrapper>
  )
}

export default AdPreview
