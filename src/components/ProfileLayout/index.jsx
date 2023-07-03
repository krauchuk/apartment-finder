import React from 'react'
import { useSelector } from 'react-redux'

import Layout from '../Layout'
import Image from '../common/Image'
import { Container, Sidebar, Navigation, Tab, Content } from './styles'

const ProfileLayout = ({ children }) => {
  const { data } = useSelector(state => state.user)

  return (
    <Layout>
      <Container>
        <Sidebar>
          <Image src={data.avatar} />
          <Navigation>
            <Tab to="general">General</Tab>
            <Tab to="favorite">Favorite Ads</Tab>
          </Navigation>
        </Sidebar>
        <Content>{children}</Content>
      </Container>
    </Layout>
  )
}

export default ProfileLayout
