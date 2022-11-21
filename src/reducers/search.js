import { RENT_TYPE } from '../constants/search'
import { CHANGE_SEARCH_STATE } from '../constants/actions'

const initState = {
  adType: RENT_TYPE,
  city: '',
  minPrice: 0,
  maxPrice: 0,
}

export default function ads(state = initState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_STATE:
      return {
        ...state,
        [action.field]: action.payload,
      }

    default:
      return state
  }
}
