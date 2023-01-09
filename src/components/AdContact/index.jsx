import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Rating from '../common/Rating'
import actions from '../../actions'
import { Wrapper, RatingBlock, Phone, Email, Votes } from './styles'

const AdContact = () => {
  const info = useSelector(state => state.ads.selected.contact) || {}
  const authorized = !!useSelector(state => state.app.user.name)
  const dispatch = useDispatch()

  const reviewHandler = () => {
    if (authorized) {
      dispatch({ type: actions.LOAD_REVIEWS, payload: { id: info.id } })
      dispatch({ type: actions.TOGGLE_MODAL, payload: 'reviews' })
    } else {
      dispatch({ type: actions.TOGGLE_MODAL, payload: 'login' })
    }
  }

  return (
    <Wrapper>
      <h3>{info.name}</h3>
      {info.type === 'company' && (
        <RatingBlock>
          <Rating value={info.rating} /> <Votes onClick={reviewHandler}>{info.votes} vote(s)</Votes>
        </RatingBlock>
      )}
      <Phone href={`tel:${info.phone}`}>Make a phone call</Phone>
      {!!info.email && <Email href={`mailto:${info.email}`}>Send email</Email>}
    </Wrapper>
  )
}

export default AdContact
