import types from '../actions'
import history from '../history'

const isRoot = history.location.pathname === '/'
const searchParams = new URLSearchParams(isRoot ? '' : window.location.search)
const rooms = searchParams.get('rooms')

const initState = {
  adType: searchParams.get('adType') || 'rent',
  city: searchParams.get('city') || '',
  minPrice: +(searchParams.get('minPrice') || 0),
  maxPrice: +(searchParams.get('maxPrice') || 0),
  rooms: rooms === '5+' ? rooms : +(searchParams.get('rooms') || 0),
  perPage: +(searchParams.get('perPage') || 6),
  page: +(searchParams.get('page') || 1),
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
