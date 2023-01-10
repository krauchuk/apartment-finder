import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import actions from '../../actions'
import { Box, Heart } from './styles'

const FavoriteButton = () => {
  const dispatch = useDispatch()
  const authorized = !!useSelector(state => state.app.user.name)
  const favorite = useSelector(state => state.ads.selected.favorite)

  const clickHandler = () => {
    if (authorized) {
      dispatch({ type: actions.TOGGLE_FAVORITE })
    } else {
      dispatch({ type: actions.TOGGLE_MODAL, payload: 'login' })
    }
  }

  return (
    <Box onClick={clickHandler}>
      <Heart $active={favorite} />
    </Box>
  )
}

export default FavoriteButton
