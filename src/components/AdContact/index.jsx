import React from 'react'
import { useSelector } from 'react-redux'

import { Wrapper, RatingBlock, Phone, Email, Rating, Star } from './styles'

const AdContact = () => {
  const info = useSelector(state => state.ads.selected.contact) || {}

  return (
    <Wrapper>
      <h3>{info.name}</h3>
      {info.type === 'company' && (
        <RatingBlock>
          <Rating>
            {[1, 2, 3, 4, 5].map(r => (
              <Star key={r} active={r <= info.rating} />
            ))}
          </Rating>{' '}
          {info.votes} vote(s)
        </RatingBlock>
      )}
      <Phone href={`tel:${info.phone}`}>Make a phone call</Phone>
      {!!info.email && <Email href={`mailto:${info.email}`}>Send email</Email>}
    </Wrapper>
  )
}

export default AdContact
