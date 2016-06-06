import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { render } from 'react-dom'
import './style.css'
import UPCA from './apps/upc-a/components'
import configureStore from './apps/upc-a/store'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const mountNode = document.getElementById('content')
const App = ({ children }) => (
  <div>
    Welcome to the site
    {children}
  </div>
)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/upc-a" />
        <Route path="/upc-a" component={UPCA} />
      </Route>
    </Router>
  </Provider>,
  mountNode
)
