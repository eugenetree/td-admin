import React from 'react';
import './LayoutGlobal.scss'

const LayoutGlobal = ({children}) => {
  return (
    <div className="layout-global">
      {children}
    </div>
  )
}

export default LayoutGlobal