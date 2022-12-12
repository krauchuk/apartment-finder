import { put, takeEvery, call, all } from 'redux-saga/effects'

import apiClient from '../../fakeApi/client'
import actionTypes from '../actions'

function* loadCities() {
  try {
    const data = yield call(apiClient.get, 'fake.api/cities')

    yield put({ type: actionTypes.LOAD_CITIES_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: actionTypes.LOAD_CITIES_FAILURE })
  }
}

export default function* filterSaga() {
  yield all([takeEvery(actionTypes.LOAD_CITIES, loadCities)])
}
