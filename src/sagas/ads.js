import { select, call, put, takeLatest, all } from 'redux-saga/effects'

import apiClient from '@fakeApi/client'

import actionTypes from '@actions'

function* fetchPremiumAds() {
  try {
    const data = yield call(apiClient.get, 'fake.api/get_premium_ads')

    yield put({ type: actionTypes.FETCH_PREMIUM_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: actionTypes.FETCH_PREMIUM_FAILURE })
  }
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

function* fetchAdById(action) {
  try {
    const data = yield call(apiClient.get, 'fake.api/get_ad', { id: action.payload })

    yield put({ type: actionTypes.FETCH_AD_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: actionTypes.FETCH_AD_FAILURE })
  }
}

export default function* adsSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_PREMIUM_REQUEST, fetchPremiumAds),
    takeLatest(actionTypes.FETCH_REGULAR_REQUEST, fetchRegularAds),
    takeLatest(actionTypes.FETCH_AD_REQUEST, fetchAdById),
  ])
}
