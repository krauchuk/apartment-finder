import { all } from 'redux-saga/effects'

import adsSaga from './ads'
import appSaga from './app'

export default function* rootSaga() {
  yield all([adsSaga(), appSaga()])
}
