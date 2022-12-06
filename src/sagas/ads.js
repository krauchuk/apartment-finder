import { select, call, put, takeLatest, all } from 'redux-saga/effects'

import apiClient from '@fakeApi/client'

import actionTypes from '@actions'

function* loadAds({ payload }) {
  try {
    const paramsObj = payload.type === 'premium' ? { premium: true } : yield select(state => state.filter)
    const params = new URLSearchParams(paramsObj)

    const data = yield call(apiClient.get, `fake.api/ads?${params.toString()}`)

    yield put({ type: actionTypes.LOAD_ADS_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: actionTypes.LOAD_ADS_FAILURE })
  }
}

function* loadAd({ payload }) {
  try {
    const data = yield call(apiClient.get, `fake.api/ads/${payload.id}`)

    yield put({ type: actionTypes.LOAD_AD_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: actionTypes.LOAD_AD_FAILURE })
  }
}

export default function* adsSaga() {
  yield all([takeLatest(actionTypes.LOAD_ADS, loadAds), takeLatest(actionTypes.LOAD_AD, loadAd)])
}
