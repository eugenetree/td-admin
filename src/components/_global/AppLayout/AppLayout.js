import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AppLayout = ({children}) => {
  return (
    <div className="app-layout">
      <ToastContainer 
        position="top-center"
        closeOnClick={true}
      />

      {children}
    </div>
  )
}

export default AppLayout