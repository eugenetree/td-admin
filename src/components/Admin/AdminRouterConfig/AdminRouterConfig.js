import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from '../Main'
import PostsTable from '../PostsTable'

const AdminRouterConfig = () => (
  <Switch>
    <Route path="/main" component={Main}/>
    <Route path="/blog/posts" component={PostsTable}/>
  </Switch>
)

export default AdminRouterConfig