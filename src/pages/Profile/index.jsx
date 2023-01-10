import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Layout from '../../components/Layout'
import Image from '../../components/common/Image'
import AdList from '../../components/AdList'
import actions from '../../actions'
import { Container, Sidebar, Navigation, Tab, Content, InfoField, Favorite } from './styles'

const ProfilePage = () => {
  const { tab } = useParams()
  const { data, favorites, loading } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (tab === 'favorite') {
      dispatch({ type: actions.LOAD_FAVORITES })
    }
  }, [tab])

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
        <Content>
          {tab === 'general' && (
            <>
              <InfoField>
                <h4>Username</h4> {data.name}
              </InfoField>
              <InfoField>
                <h4>Email</h4> {data.email}
              </InfoField>
              <InfoField>
                <h4>Phone</h4> {data.phone}
              </InfoField>
            </>
          )}
          {tab === 'favorite' && (
            <Favorite>
              <AdList items={favorites} loading={loading} />
            </Favorite>
          )}
        </Content>
      </Container>
    </Layout>
  )
}

export default ProfilePage
