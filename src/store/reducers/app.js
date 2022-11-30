import types from '@actions'

const initState = {
  initialized: false,
  cities: [],
  loading: true,
}

export default function app(state = initState, action) {
  switch (action.type) {
    case types.SET_APP_INIT_STATUS:
      return {
        ...state,
        initialized: action.payload,
      }

    case types.FETCH_CITIES_REQUEST:
      return {
        ...state,
        cities: [],
        loading: true,
      }

    case types.FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        loading: false,
      }

    case types.FETCH_CITIES_FAILURE:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}
