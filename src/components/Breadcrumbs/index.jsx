import React from 'react'

import { Wrapper, Item } from './styles'

const Breadcrumbs = ({ ad }) => {
  return (
    <Wrapper>
      <Item>{ad.type}</Item>
      <Item>{ad.city}</Item>
      <Item>{`${ad.rooms} ${ad.rooms > 1 ? 'rooms' : 'room'}`}</Item>
    </Wrapper>
  )
}

export default Breadcrumbs
