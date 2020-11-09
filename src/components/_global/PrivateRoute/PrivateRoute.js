import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import useToken from '@utils/hooks/useToken'

const PrivateRoute = ({ children, ...rest}) => {
  // const token = useToken()


  return <Route {...rest}>
  {
    useToken()
      ? children
      : <Redirect to="/login" />
  }

</Route>
}

export default PrivateRoute
