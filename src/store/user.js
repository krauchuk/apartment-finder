import types from '../actions'

const initState = {
  data: {},
  favorites: [],
  loading: false,
}

export default function ads(state = initState, action) {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        data: action.payload,
      }

    case types.LOAD_FAVORITES:
      return {
        ...state,
        favorites: [],
        loading: true,
      }

    case types.LOAD_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: action.payload,
        loading: false,
      }

    case types.LOAD_FAVORITES_FAILURE:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}
