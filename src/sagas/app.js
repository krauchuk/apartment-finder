import { put, takeEvery, call, takeLatest, all } from 'redux-saga/effects'

import actionTypes from '@actions'

import apiClient from '@fakeApi/client'

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

function* fetchCities() {
  try {
    const data = yield call(apiClient.get, 'fake.api/get_cities')

    yield put({ type: actionTypes.FETCH_CITIES_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: actionTypes.FETCH_CITIES_FAILURE })
  }
}

export default function* appSaga() {
  yield all([takeEvery(actionTypes.APP_INITIALIZE, initApp), takeEvery(actionTypes.FETCH_CITIES_REQUEST, fetchCities)])
}
