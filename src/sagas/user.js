import { call, put, all, takeLatest } from 'redux-saga/effects'

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

export default function* userSaga() {
  yield all([takeLatest(actionTypes.LOGIN, login)])
}
