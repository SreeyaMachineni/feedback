import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
//import root reducer

const middlewares = [logger]
const composedMiddleware = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, undefined, composedMiddleware)