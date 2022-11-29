import types from '@actions'

const initState = {
  adType: 'rent',
  city: '',
  minPrice: 0,
  maxPrice: 0,
  rooms: 0,
  page: 1,
}

export default function filter(state = initState, action) {
  switch (action.type) {
    case types.UPDATE_FILTER:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
