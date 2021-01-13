import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import {BrowserRouter as Router } from "react-router-dom"

import { Provider } from 'react-redux'
import store from './store/index'
import App from './App'

const history = createBrowserHistory()
const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
)
