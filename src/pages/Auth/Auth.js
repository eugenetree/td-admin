import React from 'react'

import AuthLogin from '@components/pages/Auth/AuthLogin'
import './Auth.scss'

const Auth = ({ children }) => {
  return (
    <div className="auth">
      <AuthLogin/>
    </div>
  )
}

export default Auth