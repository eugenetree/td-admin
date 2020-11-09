import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Admin from '@components/Admin'
import Auth from '@components/Auth'

import useToken from '@utils/hooks/useToken'
import PrivateRoute from '@components/_global/PrivateRoute'

const AppRouterConfig = () => {
  const token = useToken()

  return (
    <Switch>
      <Route path="/" exact>
        {
          token ?
            <Redirect to="/main"/> : 
            <Redirect to="/login"/>
        }
      </Route>
      
      <Route path="/login" exact>
        {
          token ? 
            <Redirect to="/main"/> :
            <Auth/>
        }
      </Route>
      
      <PrivateRoute 
        path={[
          '/main', 
          '/blog/posts', 
          '/blog/filter', 
          '/portfolio', 
          '/portfolio/filter',
          '/reviews',
          '/letters'
        ]}
      >
        <Admin/>
      </PrivateRoute>
    </Switch>
  )
}

export default AppRouterConfig