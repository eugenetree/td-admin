import React from 'react'

import Login from '../Login'
import './AuthLayout.scss'

const Auth = ({ children }) => {
  return (
    <div className="auth">
      <Login/>
    </div>
  )
}

export default Auth