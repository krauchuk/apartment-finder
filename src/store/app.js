import types from '@actions'

const initState = {
  cities: [],
  loading: true,
}

export default function app(state = initState, action) {
  switch (action.type) {
    case types.LOAD_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        loading: false,
      }

    case types.LOAD_CITIES_FAILURE:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}
