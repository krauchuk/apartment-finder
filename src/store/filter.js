import types from '../actions'
import history from '../history'

const isAdsPage = history.location.pathname === '/ads'
const searchParams = new URLSearchParams(isAdsPage ? window.location.search : '')
const rooms = searchParams.get('rooms')

const initState = {
  adType: searchParams.get('adType') || 'rent',
  city: searchParams.get('city') || '',
  minPrice: +(searchParams.get('minPrice') || 0),
  maxPrice: +(searchParams.get('maxPrice') || 0),
  rooms: rooms === '5+' ? rooms : +(searchParams.get('rooms') || 0),
  perPage: +(searchParams.get('perPage') || 6),
  page: +(searchParams.get('page') || 1),
  sort: searchParams.get('sort') || 'date_asc',
  minSquare: +(searchParams.get('minSquare') || 0),
  maxSquare: +(searchParams.get('maxSquare') || 0),
  cities: [],
  loading: true,
}

export const searchParamsSelector = state => {
  return {
    adType: state.filter.adType,
    city: state.filter.city,
    minPrice: state.filter.minPrice,
    maxPrice: state.filter.maxPrice,
    rooms: state.filter.rooms,
    perPage: state.filter.perPage,
    page: state.filter.page,
    sort: state.filter.sort,
    minSquare: state.filter.minSquare,
    maxSquare: state.filter.maxSquare,
  }
}

export default function filter(state = initState, action) {
  switch (action.type) {
    case types.UPDATE_FILTER:
      return {
        ...state,
        ...action.payload,
      }

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
