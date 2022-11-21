import React from 'react'

import { Wrapper, Column, ColumnTitle, ColumnLink, Copyrights } from './styles'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Wrapper>
      <Column>
        <ColumnTitle>About</ColumnTitle>
        <ColumnLink>Sitemap</ColumnLink>
        <ColumnLink>Contact Us</ColumnLink>
        <ColumnLink>FAQ</ColumnLink>
      </Column>
      <Column>
        <ColumnTitle>Services</ColumnTitle>
        <ColumnLink>Realtors</ColumnLink>
        <ColumnLink>Apartment check</ColumnLink>
      </Column>
      <Copyrights>Site design / logo © {year} My Company Inc</Copyrights>
    </Wrapper>
  )
}

export default Footer
