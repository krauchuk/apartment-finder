import React from 'react'

import Layout from '../../components/Layout'
import { ContactInfo, Title, Description, PhoneList, PhoneBlock, PhoneOwner, Link, WorkingHours } from './styles'

const ContactUsPage = () => {
  return (
    <Layout>
      <ContactInfo>
        <Title>Contact</Title>
        <Description>
          We are friendly, but please don&apos;t call us. We are very busy and don&apos;t want to talk to you
        </Description>
        <PhoneList>
          <PhoneBlock>
            <PhoneOwner>Our guard dog</PhoneOwner>
            <WorkingHours>Monday - Sunday, 24/7</WorkingHours>
            <Link href="tel:+48123123123">+48 123 123 123</Link>
          </PhoneBlock>
          <PhoneBlock>
            <PhoneOwner>Gardener</PhoneOwner>
            <WorkingHours>Monday - Friday, 8:00 - 16:00</WorkingHours>
            <Link href="tel:+48111222333">+48 111 222 333</Link>
          </PhoneBlock>
        </PhoneList>
        <Description>
          You can also contact us by email <Link href="mailto:spam@gmail.com">spam@gmail.com</Link>
        </Description>
      </ContactInfo>
    </Layout>
  )
}

export default ContactUsPage
