import React from 'react'

import Image from '../common/Image'
import { Wrapper, AdDate, InfoBlock, AdPrice, SizeBlock } from './styles'

const AdPreview = ({ data, highlightPremium }) => {
  return (
    <Wrapper to={`/ad/${data.id}`} premium={highlightPremium && data.premium}>
      <AdDate>{new Date(data.date).toLocaleDateString('en-US')}</AdDate>
      <Image src={data.images[0]} />
      <InfoBlock>
        <h3>{data.name}</h3>
        <AdPrice>${data.price}</AdPrice>
        <SizeBlock>
          <span>{data.rooms} room(s)</span>/
          <span>
            {data.square} m<sup>2</sup>
          </span>
        </SizeBlock>
        <span>
          {data.city}, {data.address}
        </span>
      </InfoBlock>
    </Wrapper>
  )
}

export default AdPreview
