import React from 'react'

import Layout from '../../components/Layout'
import { Info, Title, Description, Packages, PackageBlock, NavLink } from './styles'

const packages = [
  { title: 'Start', services: ['View ad description'], price: 250 },
  { title: 'Medium', services: ['View ad description', 'Call the seller', 'Final price clarification'], price: 500 },
  {
    title: 'Premium',
    services: ['View ad description', 'Call the seller', 'Final price clarification', 'Property inspection'],
    price: 750,
  },
]

const Package = ({ title, services, price }) => (
  <PackageBlock>
    <h2>{title}</h2>
    <div>
      <h4>Includes:</h4>
      <ul>
        {services.map(s => (
          <li key={s}>- {s}</li>
        ))}
      </ul>
    </div>
    <h3>${price}</h3>
  </PackageBlock>
)

const CheckPage = () => {
  return (
    <Layout>
      <Info>
        <Title>Apartment check</Title>
        <Description>
          Does the ad look suspicious? You don&apos;t know what&apos;s worth checking in the apartment? <br />
          Our gardener can do it for you! At the moment we have three <strong>packages</strong>:
        </Description>
        <Packages>
          {packages.map(p => (
            <Package key={p.title} title={p.title} services={p.services} price={p.price} />
          ))}
        </Packages>
        <Description>
          Do you have any questions? <NavLink to="/contact">Contact us</NavLink>
        </Description>
      </Info>
    </Layout>
  )
}

export default CheckPage
