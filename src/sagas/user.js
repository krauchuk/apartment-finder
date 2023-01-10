import { call, put, all, takeLatest, select } from 'redux-saga/effects'

import apiClient from '../../fakeApi/client'
import actionTypes from '../actions'

function* login({ payload }) {
  try {
    yield put({ type: actionTypes.SET_LOADING, payload: true })

    const data = yield call(apiClient.post, 'fake.api/login', payload)

    yield put({ type: actionTypes.SET_USER, payload: data })
    yield put({ type: actionTypes.TOGGLE_MODAL, payload: 'login' })
  } catch (e) {
    // TODO - show notification
  }

  yield put({ type: actionTypes.SET_LOADING, payload: false })
}

function* toggleFavorite() {
  const ad = yield select(state => state.ads.selected)

  try {
    yield put({ type: actionTypes.LOAD_AD_SUCCESS, payload: { ...ad, favorite: !ad.favorite } })

    const method = ad.favorite ? apiClient.delete : apiClient.put
    yield call(method, `fake.api/favorite/${ad.id}`)
  } catch (e) {
    // TODO - show notification
    yield put({ type: actionTypes.LOAD_AD_SUCCESS, payload: { ...ad, favorite: ad.favorite } })
  }
}

export default function* userSaga() {
  yield all([takeLatest(actionTypes.LOGIN, login), takeLatest(actionTypes.TOGGLE_FAVORITE, toggleFavorite)])
}
