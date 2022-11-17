import { FETCH_PREMIUM_REQUEST, FETCH_PREMIUM_SUCCESS, FETCH_PREMIUM_FAILURE } from '../constants/actionTypes/ads'

const initState = {
  premium: {
    items: [],
    loading: true,
  },
  regular: {
    items: [],
    count: 0,
    page: 1,
    pages: 1,
    loading: true,
  },
}

export default function ads(state = initState, action) {
  switch (action.type) {
    case FETCH_PREMIUM_REQUEST:
      return {
        ...state,
        premium: {
          ...state.premium,
          items: [],
          loading: true,
        },
      }

    case FETCH_PREMIUM_SUCCESS:
      return {
        ...state,
        premium: {
          ...state.premium,
          items: action.payload,
          loading: false,
        },
      }

    case FETCH_PREMIUM_FAILURE:
      return {
        ...state,
        premium: {
          ...state.premium,
          items: [],
          loading: false,
        },
      }

    default:
      return state
  }
}
