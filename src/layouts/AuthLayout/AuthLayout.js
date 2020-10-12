import React from 'react';

export default function AuthLayout({children}) {
  return (
    <div className="layout-auth">
      <h6>auth layout</h6>
      {children}
    </div>
  )
}