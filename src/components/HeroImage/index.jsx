import React from 'react'

import { Wrapper, Header, Description } from './styles'

const HeroImage = ({ children }) => {
  return (
    <Wrapper>
      <Header>Apartment Finder</Header>
      <Description>Find your dream</Description>
      {children}
    </Wrapper>
  )
}

export default HeroImage
