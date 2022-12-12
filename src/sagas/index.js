import { all } from 'redux-saga/effects'

import adsSaga from './ads'
import filterSaga from './filter'

export default function* rootSaga() {
  yield all([adsSaga(), filterSaga()])
}
