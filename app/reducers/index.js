import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import environment from './environment.js'
import {shopping,cart} from './shopping.js'

const rootReducer = combineReducers({
  environment,
  shopping,
  cart,
  routing: routerReducer
})

export default rootReducer