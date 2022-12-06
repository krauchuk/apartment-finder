import { put, takeEvery, call, all } from 'redux-saga/effects'

import actionTypes from '@actions'

import apiClient from '@fakeApi/client'

function* loadCities() {
  try {
    const data = yield call(apiClient.get, 'fake.api/cities')

    yield put({ type: actionTypes.LOAD_CITIES_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: actionTypes.LOAD_CITIES_FAILURE })
  }
}

export default function* appSaga() {
  yield all([takeEvery(actionTypes.LOAD_CITIES, loadCities)])
}
