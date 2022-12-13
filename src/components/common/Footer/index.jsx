import React from 'react'

import { Wrapper, Column, ColumnTitle, ColumnLink, Copyrights } from './styles'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Wrapper>
      <Column>
        <ColumnTitle>About</ColumnTitle>
        <ColumnLink to="/contact">Contact Us</ColumnLink>
        <ColumnLink to="/faq">FAQ</ColumnLink>
      </Column>
      <Column>
        <ColumnTitle>Services</ColumnTitle>
        <ColumnLink to="/realtors">Realtors</ColumnLink>
        <ColumnLink to="/check">Apartment check</ColumnLink>
      </Column>
      <Copyrights>Site design / logo © {year} My Company Inc</Copyrights>
    </Wrapper>
  )
}

export default Footer
