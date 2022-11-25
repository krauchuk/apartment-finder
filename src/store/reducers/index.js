import { combineReducers } from 'redux'

import ads from './ads'
import app from './app'
import filter from './filter'

const rootReducer = combineReducers({
  ads,
  app,
  filter,
})

export default rootReducer
