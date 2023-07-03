import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children, ...rest }) => {
  const authorized = !!useSelector(state => state.app.user.name)

  if (!authorized) {
    return <Redirect to="/" />
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest}>{children}</Route>
}

export default PrivateRoute
