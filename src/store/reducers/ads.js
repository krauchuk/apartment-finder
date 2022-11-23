import * as types from '@constants/actions'

const initState = {
  premium: {
    items: [],
    loading: true,
  },
  regular: {
    items: [],
    count: 0,
    pages: 0,
    loading: true,
  },
  selected: {
    data: {},
    loading: true,
  },
}

export default function ads(state = initState, action) {
  switch (action.type) {
    case types.FETCH_PREMIUM_REQUEST:
      return {
        ...state,
        premium: {
          ...state.premium,
          items: [],
          loading: true,
        },
      }

    case types.FETCH_PREMIUM_SUCCESS:
      return {
        ...state,
        premium: {
          ...state.premium,
          items: action.payload,
          loading: false,
        },
      }

    case types.FETCH_PREMIUM_FAILURE:
      return {
        ...state,
        premium: {
          ...state.premium,
          items: [],
          loading: false,
        },
      }

    case types.FETCH_REGULAR_REQUEST:
      return {
        ...state,
        regular: {
          ...state.regular,
          items: [],
          loading: true,
        },
      }

    case types.FETCH_REGULAR_SUCCESS:
      return {
        ...state,
        regular: {
          ...state.regular,
          ...action.payload,
          loading: false,
        },
      }

    case types.FETCH_REGULAR_FAILURE:
      return {
        ...state,
        regular: {
          ...state.regular,
          items: [],
          loading: false,
        },
      }

    case types.FETCH_AD_REQUEST:
      return {
        ...state,
        selected: {
          ...state.selected,
          data: {},
          loading: true,
        },
      }

    case types.FETCH_AD_SUCCESS:
      return {
        ...state,
        selected: {
          ...state.selected,
          data: action.payload,
          loading: false,
        },
      }

    case types.FETCH_AD_FAILURE:
      return {
        ...state,
        selected: {
          ...state.selected,
          loading: false,
        },
      }

    default:
      return state
  }
}
