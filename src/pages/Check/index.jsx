import React from 'react'

import Layout from '../../components/Layout'
import { Info, Title, Description, NavLink, Table, Price, Cross, Tick } from './styles'

const services = ['View ad description', 'Call the seller', 'Final price clarification', 'Property inspection']

const packages = [
  { title: 'Start', price: 250, services: [true, false, false, false] },
  { title: 'Medium', price: 500, services: [true, true, true, false] },
  { title: 'Premium', price: 750, services: [true, true, true, true] },
]

const CheckPage = () => {
  return (
    <Layout>
      <Info>
        <Title>Apartment check</Title>
        <Description>
          Does the ad look suspicious? You don&apos;t know what&apos;s worth checking in the apartment? <br />
          Our gardener can do it for you! At the moment we have three <strong>packages</strong>:
        </Description>
        <Table>
          <thead>
            <tr>
              <td />
              {packages.map(p => (
                <th key={p.title}>{p.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services.map((text, i) => (
              <tr key={text}>
                <td>{text}</td>
                {packages.map(p => (
                  <td key={p.title}>{p.services[i] ? <Tick>&#x2713;</Tick> : <Cross>X</Cross>}</td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td />
              {packages.map(p => (
                <td key={p.price}>
                  <Price>${p.price}</Price>
                </td>
              ))}
            </tr>
          </tfoot>
        </Table>
        <Description>
          Do you have any questions? <NavLink to="/contact">Contact us</NavLink>
        </Description>
      </Info>
    </Layout>
  )
}

export default CheckPage
