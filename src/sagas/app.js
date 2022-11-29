import { put, takeEvery } from 'redux-saga/effects'

import actionTypes from '@actions'

function* initApp() {
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

  yield put({ type: actionTypes.UPDATE_FILTER, payload })
  yield put({ type: actionTypes.SET_APP_INIT_STATUS, payload: true })
}

function* watchInitApp() {
  yield takeEvery(actionTypes.APP_INITIALIZE, initApp)
}

export default watchInitApp
