import { createStore, applyMiddleware, compose } from 'redux'

import asyncMiddleware from './middleware/async'

import rootReducer from './reducers'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = devtools || compose

export default createStore(rootReducer, composeEnhancers(applyMiddleware(asyncMiddleware)))
