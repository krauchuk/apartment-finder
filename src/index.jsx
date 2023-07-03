import React from 'react'
import ReactDom from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Ads from './pages/Ads'
import Ad from './pages/Ad'
import Contact from './pages/ContactUs'
import Check from './pages/Check'
import NotFound from './pages/NotFound'
import ProfileGeneral from './pages/Profile/General'
import ProfileFavorite from './pages/Profile/Favorite'
import store from './store'
import history from './routing/history'
import PrivateRoute from './routing/PrivateRoute'
import LoginModal from './components/LoginModal'
import ReviewModal from './components/ReviewModal'
import ModalBackdrop from './components/common/ModalBackdrop'

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, sans-serif;
    }

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  main {
    flex: 1;
  }

  body {
    overflow: ${props => (props.$scrollable ? 'auto' : 'hidden')};
  }
`

const App = () => {
  const modals = useSelector(state => state.app.modals)

  const modalIsOpen = Object.keys(modals).reduce((acc, key) => {
    if (modals[key]) return true
    return acc
  }, false)

  return (
    <>
      <GlobalStyles $scrollable={!modalIsOpen} />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />
          <Route path="/check" component={Check} />
          <Route path="/ads" component={Ads} />
          <Route path="/ad/:id" component={Ad} />
          <PrivateRoute path="/profile/general" component={ProfileGeneral} />
          <PrivateRoute path="/profile/favorite" component={ProfileFavorite} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <ModalBackdrop show={modalIsOpen}>
        <LoginModal />
        <ReviewModal />
      </ModalBackdrop>
    </>
  )
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
)
