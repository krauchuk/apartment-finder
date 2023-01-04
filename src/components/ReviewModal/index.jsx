import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Modal from '../common/Modal'
import Spinner from '../common/Spinner'
import Rating from '../common/Rating'
import actions from '../../actions'
import { List, Review } from './styles'

const ReviewModal = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.app.modals.reviews)
  const { items, loading } = useSelector(state => state.ads.reviews)

  const closeHandler = () => dispatch({ type: actions.TOGGLE_MODAL, payload: 'reviews' })

  return (
    <Modal show={show} onClose={closeHandler}>
      {loading && <Spinner />}
      {!loading && !items.length && <h3>No reviews</h3>}
      {!loading && (
        <List>
          {items.map(review => (
            <Review>
              <h4>{review.name}</h4>
              <div>
                <Rating value={review.rating} size={10} />
                <div>{review.text}</div>
              </div>
            </Review>
          ))}
        </List>
      )}
    </Modal>
  )
}

export default ReviewModal
