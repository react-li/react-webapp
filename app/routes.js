import React from 'react'
import { Route, IndexRoute} from 'react-router'

/**
 * common
 */
import App from './pages/App.js'
import NotFound from './pages/NotFound.js'

/**
 * page
 */
import Index from './pages/Index.js'
import City from './pages/City.js'
import Me from './pages/Me.js'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import Main from './pages/Main.js'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/city" component={City}/>
    <Route path="/me" component={Me}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="*" component={NotFound}/>
  </Route>
)