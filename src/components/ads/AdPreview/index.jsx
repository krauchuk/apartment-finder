import React from 'react'
import { useNavigate } from 'react-router-dom'

import Image from '@components/common/Image'

import { Wrapper, AdDate, InfoBlock, AdName, AdPrice, SizeBlock, AdRooms, AdSquare, AdAddress } from './styles'

const AdPreview = ({ data }) => {
  const navigate = useNavigate()

  const onClickHandler = () => navigate(`/ad/${data.id}`)

  return (
    <Wrapper onClick={onClickHandler}>
      <AdDate>{data.date}</AdDate>
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
