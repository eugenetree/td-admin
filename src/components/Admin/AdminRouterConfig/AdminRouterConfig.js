import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from '../Main'
import PostsTable from '../PostsTable'
import PostsHandle from '../PostsHandle'

const AdminRouterConfig = () => (
  <Switch>
    <Route path="/main" component={Main}/>
    <Route path="/blog/posts" exact component={PostsTable}/>
    <Route path={['/blog/posts/edit/:slug', '/blog/posts/create']} component={PostsHandle}/>
  </Switch>
)

export default AdminRouterConfig