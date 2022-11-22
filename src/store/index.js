import { createStore, applyMiddleware, compose } from 'redux'

import asyncMiddleware from './middlewares/async'

import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(rootReducer, composeEnhancers(applyMiddleware(asyncMiddleware)))
