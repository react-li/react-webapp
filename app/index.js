import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import route from './routes'
import configureStore from './store/configureStore.js'


import './styles/app.scss'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={route}/>
  </Provider>,
  document.getElementById('root')
)