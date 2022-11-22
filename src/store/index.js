import { createStore, applyMiddleware, compose } from 'redux'

import asyncMiddleware from './middleware/async'
import loggerMiddleware from './middleware/logger'

import rootReducer from './reducers'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = devtools || compose

const middleware = [asyncMiddleware]
if (!devtools) middleware.push(loggerMiddleware)

export default createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))
