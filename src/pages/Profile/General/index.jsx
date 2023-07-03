import React from 'react'
import { useSelector } from 'react-redux'

import ProfileLayout from '../../../components/ProfileLayout'
import { ProfileInfoRow } from './styles'

const ProfileGeneralPage = () => {
  const { data } = useSelector(state => state.user)

  return (
    <ProfileLayout>
      <ProfileInfoRow>
        <h4>Username</h4> {data.name}
      </ProfileInfoRow>
      <ProfileInfoRow>
        <h4>Email</h4> {data.email}
      </ProfileInfoRow>
      <ProfileInfoRow>
        <h4>Phone</h4> {data.phone}
      </ProfileInfoRow>
    </ProfileLayout>
  )
}

export default ProfileGeneralPage
