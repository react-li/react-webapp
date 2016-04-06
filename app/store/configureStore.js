import {createStore, applyMiddleware, combineReducers} from 'redux'
import { syncHistory } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from '../reducers/index.js'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}