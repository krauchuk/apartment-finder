import { UPDATE_FILTER, SET_APP_INIT } from '@constants/actions'

export const initApp = () => async dispatch => {
  const { search, href } = window.location
  const searchParams = new URLSearchParams(search)

  const initPage = href === '/' ? 1 : searchParams.get('page')

  const payload = {
    adType: searchParams.get('adType') || 'rent',
    city: searchParams.get('city') || '',
    minPrice: +(searchParams.get('minPrice') || 0),
    maxPrice: +(searchParams.get('maxPrice') || 0),
    rooms: +(searchParams.get('rooms') || 0),
    page: +(initPage || 1),
  }

  dispatch({ type: UPDATE_FILTER, payload })
  dispatch({ type: SET_APP_INIT, payload: true })
}
