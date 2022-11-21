import { combineReducers } from 'redux'

import ads from './ads'
import search from './search'

const rootReducer = combineReducers({
  ads,
  search,
})

export default rootReducer
