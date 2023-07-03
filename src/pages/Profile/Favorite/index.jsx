import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import actions from '../../../actions'
import ProfileLayout from '../../../components/ProfileLayout'
import AdList from '../../../components/AdList'
import { ListWrapper } from './styles'

const ProfileFavoritePage = () => {
  const { favorites, loading } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: actions.LOAD_FAVORITES })
  }, [])

  return (
    <ProfileLayout>
      <ListWrapper>
        <AdList items={favorites} loading={loading} />
      </ListWrapper>
    </ProfileLayout>
  )
}

export default ProfileFavoritePage
