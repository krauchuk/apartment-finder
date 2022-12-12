import React from 'react'
import ReactDom from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Ads from './pages/Ads'
import Ad from './pages/Ad'
import Contact from './pages/ContactUs'
import NotFound from './pages/NotFound'

import store from './store'
import history from './history'

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, sans-serif;
    }
`

ReactDom.render(
  <Provider store={store}>
    <GlobalStyles />
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
        <Route path="/ads" component={Ads} />
        <Route path="/ad/:id" component={Ad} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app'),
)
