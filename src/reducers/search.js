import { RENT_TYPE } from '../constants/search'
import { SET_AD_TYPE, SET_CITY, SET_MIN_PRICE, SET_MAX_PRICE } from '../constants/actionTypes/search'

const initState = {
  adType: RENT_TYPE,
  city: '',
  minPrice: 0,
  maxPrice: 0,
}

export default function ads(state = initState, action) {
  switch (action.type) {
    case SET_AD_TYPE:
      return {
        ...state,
        adType: action.payload,
      }

    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      }

    case SET_MIN_PRICE:
      return {
        ...state,
        minPrice: action.payload,
      }

    case SET_MAX_PRICE:
      return {
        ...state,
        maxPrice: action.payload,
      }

    default:
      return state
  }
}
