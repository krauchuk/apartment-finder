import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Layout from '../../components/Layout'
import Image from '../../components/common/Image'
import AdList from '../../components/AdList'
import { Container, Sidebar, Navigation, Tab, Content, UserInfo } from './styles'

const ProfilePage = () => {
  const user = useSelector(state => state.app.user)
  const [view, setView] = useState('general')

  return (
    <Layout>
      <Container>
        <Sidebar>
          <Image src={user.avatar} />
          <Navigation>
            <Tab onClick={() => setView('general')}>General</Tab>
            <Tab onClick={() => setView('favorite')}>Favorite Ads</Tab>
          </Navigation>
        </Sidebar>
        <Content>
          {view === 'general' && (
            <>
              <UserInfo>
                <h4>Username</h4> {user.name}
              </UserInfo>
              <UserInfo>
                <h4>Email</h4> {user.email}
              </UserInfo>
              <UserInfo>
                <h4>Phone</h4> {user.phone}
              </UserInfo>
            </>
          )}
          {view === 'favorite' && <AdList items={user.favorites} />}
        </Content>
      </Container>
    </Layout>
  )
}

export default ProfilePage
