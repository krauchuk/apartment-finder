import { all } from 'redux-saga/effects'

import adsSaga from './ads'
import filterSaga from './filter'
import userSaga from './user'

export default function* rootSaga() {
  yield all([adsSaga(), filterSaga(), userSaga()])
}
