import React from 'react'
import { Switch, Route, useLocation, Link } from 'react-router-dom'
import { Counter } from './features/counter/Counter'
import './App.css'

import GlobalLayout from '@layouts/GlobalLayout/GlobalLayout'
import AuthLayout from '@layouts/AuthLayout/AuthLayout'
import AdminLayout from '@layouts/AdminLayout/AdminLayout'

import Auth from './pages/Auth/Auth'
import Main from './pages/Main/Main'

function App() {
  const Page = (
    <Route path='/' exact component={Main}/>
  )

  const Layout = (
    <Route path={['login', 'register']} exact component={({children}) => <AuthLayout>{children}</AuthLayout>}/>
  )

  return (
    <div className="App">
      <GlobalLayout>
        <Link to="/">GO TO ADMIN</Link>
        <Link to="/posts">GO TO POSTS</Link>
        <Link to="/login">GO TO LOGIN</Link>

        <Layout>123321</Layout>
      </GlobalLayout>
    </div>
  );
}

export default App;
