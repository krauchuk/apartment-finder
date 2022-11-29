import React from 'react'
import { useNavigate } from 'react-router-dom'

import Image from '@components/common/Image'

import { Wrapper, AdDate, InfoBlock, AdName, AdPrice, AdRooms, AdAddress } from './styles'

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
        <AdRooms>{data.rooms} room(s)</AdRooms>
        <AdAddress>
          {data.city}, {data.address}
        </AdAddress>
      </InfoBlock>
    </Wrapper>
  )
}

export default AdPreview
