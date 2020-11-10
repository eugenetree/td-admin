import React from 'react'
import { useDispatch } from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import { logout } from '@store/auth'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    display: 'flex', 
    justifyContent: 'space-between'
  }
}))

const AdminLayoutHeader = ({ handleDrawerToggle }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleLogoutClick = () => {
    dispatch(logout())
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar classes={{root: classes.toolbar}}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" noWrap>
          Responsive drawer
        </Typography>
        <button onClick={handleLogoutClick}>logout</button>
      </Toolbar>

    </AppBar>
  )
}

export default AdminLayoutHeader