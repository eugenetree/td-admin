import React from 'react';

export default function LayoutGlobal({children}) {
  return (
    <div className="layout-global">
      <h6>global layout</h6>
      {children}
    </div>
  )
}