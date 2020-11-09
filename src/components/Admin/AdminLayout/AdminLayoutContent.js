import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const AdminLayoutContent = ({ children }) => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      {children}
    </main>
  )
}

export default AdminLayoutContent