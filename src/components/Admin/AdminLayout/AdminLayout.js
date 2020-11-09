import React, { useState } from 'react'

import AdminLayoutHeader from './AdminLayoutHeader'
import AdminLayoutContent from './AdminLayoutContent'
import AdminLayoutSidebar from './AdminLayoutSidebar'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  }
}))

function AdminLayout({ children }) {
  console.log(123)
  const classes = useStyles()

  const [sidebarIsOpened, setsidebarIsOpened] = useState(false)

  const handleDrawerToggle = () => {
    setsidebarIsOpened(!sidebarIsOpened)
  }


  return (
    <div className={classes.root}>
      <AdminLayoutHeader
        handleDrawerToggle={handleDrawerToggle}
      />

      <AdminLayoutSidebar 
        isOpened={sidebarIsOpened}
        handleDrawerToggle={handleDrawerToggle}
      />

      <AdminLayoutContent>
        {children}
      </AdminLayoutContent>
    </div>
  )
}

export default AdminLayout