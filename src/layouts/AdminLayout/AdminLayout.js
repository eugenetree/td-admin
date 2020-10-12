import React from 'react';

export default function AdminLayout({ children }) {
  console.log('is rerendering')

  return (
    <div className="admin-layout">
      <h1>admin layout</h1>
      {children}
    </div>
  )
}