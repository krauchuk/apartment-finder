import React from 'react'

import { Wrapper, Header, Description } from './styles'

function HeroImage({ children }) {
  return (
    <Wrapper>
      <Header>Apartment Finder</Header>
      <Description>Find your dream</Description>
      {children}
    </Wrapper>
  )
}

export default HeroImage
