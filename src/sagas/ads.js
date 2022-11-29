import { select, call, put, takeLatest, all } from 'redux-saga/effects'

import apiClient from '@fakeApi/client'

import actionTypes from '@actions'

function* fetchPremiumAds() {
  try {
    const { items } = yield call(apiClient.get, 'fake.api/get_premium_ads')

    yield put({ type: actionTypes.FETCH_PREMIUM_SUCCESS, payload: items })
  } catch (e) {
    yield put({ type: actionTypes.FETCH_PREMIUM_FAILURE })
  }
}

function* watchFetchPremiumAds() {
  yield takeLatest(actionTypes.FETCH_PREMIUM_REQUEST, fetchPremiumAds)
}

function* fetchRegularAds() {
  try {
    const params = yield select(state => state.filter)
    const data = yield call(apiClient.get, 'fake.api/get_regular_ads', params)

    yield put({ type: actionTypes.FETCH_REGULAR_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: actionTypes.FETCH_REGULAR_FAILURE })
  }
}

function* watchFetchRegularAds() {
  yield takeLatest(actionTypes.FETCH_REGULAR_REQUEST, fetchRegularAds)
}

function* fetchAdById(action) {
  try {
    const adData = yield call(apiClient.get, 'fake.api/get_ad', action.payload)

    yield put({ type: actionTypes.FETCH_AD_SUCCESS, payload: adData })
  } catch (e) {
    yield put({ type: actionTypes.FETCH_AD_FAILURE })
  }
}

function* watchFetchAdById() {
  yield takeLatest(actionTypes.FETCH_AD_REQUEST, fetchAdById)
}

export default function* adsSaga() {
  yield all([watchFetchPremiumAds(), watchFetchRegularAds(), watchFetchAdById()])
}
