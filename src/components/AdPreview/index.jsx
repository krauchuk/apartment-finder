import React from 'react'

import Image from '../common/Image'
import history from '../../history'
import { Wrapper, AdDate, InfoBlock, AdName, AdPrice, SizeBlock, AdRooms, AdSquare, AdAddress } from './styles'

const AdPreview = ({ data, highlightPremium }) => {
  const onClickHandler = () => history.push(`/ad/${data.id}`)

  return (
    <Wrapper onClick={onClickHandler} premium={highlightPremium && data.premium}>
      <AdDate>{new Date(data.date).toLocaleDateString('en-US')}</AdDate>
      <Image src={data.images[0]} />
      <InfoBlock>
        <AdName>{data.name}</AdName>
        <AdPrice>${data.price}</AdPrice>
        <SizeBlock>
          <AdRooms>{data.rooms} room(s)</AdRooms>/
          <AdSquare>
            {data.square} m<sup>2</sup>
          </AdSquare>
        </SizeBlock>
        <AdAddress>
          {data.city}, {data.address}
        </AdAddress>
      </InfoBlock>
    </Wrapper>
  )
}

export default AdPreview
