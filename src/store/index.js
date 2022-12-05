import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import ads from './ads'
import app from './app'
import filter from './filter'

import rootSaga from '../sagas'

const rootReducer = combineReducers({
  ads,
  app,
  filter,
})

const devtools = process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null
const composeEnhancers = devtools || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store
