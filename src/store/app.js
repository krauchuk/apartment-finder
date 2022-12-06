import types from '@actions'

const initState = {
  cities: [],
  citiesLoading: true,
}

export default function app(state = initState, action) {
  switch (action.type) {
    case types.LOAD_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        citiesLoading: false,
      }

    case types.LOAD_CITIES_FAILURE:
      return {
        ...state,
        citiesLoading: false,
      }

    default:
      return state
  }
}
