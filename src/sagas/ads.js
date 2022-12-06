import { select, call, put, takeLatest, all } from 'redux-saga/effects'

import apiClient from '@fakeApi/client'

import actionTypes from '@actions'

function* loadAds({ payload }) {
  try {
    let data = {}

    if (payload.type === 'premium') {
      data = yield call(apiClient.get, 'fake.api/get_premium_ads')
    } else {
      const params = yield select(state => state.filter)
      data = yield call(apiClient.get, 'fake.api/get_regular_ads', params)
    }

    yield put({ type: actionTypes.LOAD_ADS_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: actionTypes.LOAD_ADS_FAILURE })
  }
}

function* loadAd(action) {
  try {
    const data = yield call(apiClient.get, 'fake.api/get_ad', { id: action.payload })

    yield put({ type: actionTypes.LOAD_AD_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: actionTypes.LOAD_AD_FAILURE })
  }
}

export default function* adsSaga() {
  yield all([takeLatest(actionTypes.LOAD_ADS, loadAds), takeLatest(actionTypes.LOAD_AD, loadAd)])
}
