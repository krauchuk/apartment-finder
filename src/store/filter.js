import types from '@actions'

const { search, href } = window.location
const searchParams = new URLSearchParams(search)
const initPage = href === '/' ? 1 : searchParams.get('page')

const initState = {
  adType: searchParams.get('adType') || 'rent',
  city: searchParams.get('city') || '',
  minPrice: +(searchParams.get('minPrice') || 0),
  maxPrice: +(searchParams.get('maxPrice') || 0),
  rooms: +(searchParams.get('rooms') || 0),
  perPage: +(searchParams.get('perPage') || 6),
  page: +(initPage || 1),
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
