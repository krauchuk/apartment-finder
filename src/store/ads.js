import types from '../actions'

const initState = {
  items: [],
  pages: 0,
  count: 0,
  selected: {},
  reviews: {
    items: [],
    loading: true,
  },
  loading: true,
}

export default function ads(state = initState, action) {
  switch (action.type) {
    case types.LOAD_ADS:
      return {
        ...state,
        items: [],
        pages: 0,
        loading: true,
      }

    case types.LOAD_ADS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      }

    case types.LOAD_ADS_FAILURE:
      return {
        ...state,
        count: 0,
        loading: false,
      }

    case types.LOAD_AD:
      return {
        ...state,
        selected: {},
        loading: true,
      }

    case types.LOAD_AD_SUCCESS:
      return {
        ...state,
        selected: action.payload,
        loading: false,
      }

    case types.LOAD_AD_FAILURE:
      return {
        ...state,
        loading: false,
      }

    case types.LOAD_REVIEWS:
      return {
        ...state,
        reviews: {
          items: [],
          loading: true,
        },
      }

    case types.LOAD_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: {
          items: action.payload,
          loading: false,
        },
      }

    case types.LOAD_REVIEWS_FAILURE:
      return {
        ...state,
        reviews: {
          items: [],
          loading: false,
        },
      }

    default:
      return state
  }
}
