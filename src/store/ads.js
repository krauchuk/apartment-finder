import types from '@actions'

const initState = {
  items: [],
  pages: 0,
  count: 0,
  selected: {},
  loading: true,
}

export default function ads(state = initState, action) {
  switch (action.type) {
    case types.FETCH_PREMIUM_REQUEST:
    case types.FETCH_REGULAR_REQUEST:
      return {
        ...state,
        items: [],
        pages: 0,
        loading: true,
      }

    case types.FETCH_PREMIUM_SUCCESS:
    case types.FETCH_REGULAR_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        pages: action.payload.pages,
        count: action.payload.count,
        loading: false,
      }

    case types.FETCH_PREMIUM_FAILURE:
    case types.FETCH_REGULAR_FAILURE:
      return {
        ...state,
        loading: false,
      }

    case types.FETCH_AD_REQUEST:
      return {
        ...state,
        selected: {},
        loading: true,
      }

    case types.FETCH_AD_SUCCESS:
      return {
        ...state,
        selected: action.payload,
        loading: false,
      }

    case types.FETCH_AD_FAILURE:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}
