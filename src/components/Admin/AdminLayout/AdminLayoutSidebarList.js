import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  expand: {
    transition: '.3s'
  },
  expandReversed: {
    transform: 'rotate(180deg)'
  }
}));

export default function NestedList() {
  const history = useHistory()
  const classes = useStyles();

  const [sidebarList, setSidebarList] = useState([
    {
      opened: false,
      icon: 'home',
      title: 'Main',
      url: '/main'
    },
    {
      opened: false,
      icon: 'article',
      title: 'Blog',
      items: [
        {title: 'Posts', url: '/blog/posts'},
        {title: 'Filter', url: '/blog/filter'},
      ]
    },
    {
      opened: false,
      icon: 'photo_library',
      title: 'Portfolio',
      items: [
        {title: 'Projects', url: '/portfolio'},
        {title: 'Filter', url: '/portfolio/filter'},
      ]
    },
    {
      opened: false,
      icon: 'rate_review',
      title: 'Reviews',
      items: [
        {title: 'All', url: '/reviews'},
      ]
    },
    {
      opened: false,
      icon: 'email',
      title: 'Letters',
      items: [
        {title: 'All', url: '/letters'},
      ]
    }
  ])

  const handleItemClick = (handlingItem) => {
    if (handlingItem.url) {
      history.push(handlingItem.url)
      return
    }

    let list = [...sidebarList]
    list = list.map(item => ({
      ...item,
      opened: item === handlingItem ? !item.opened : false
    }))
    setSidebarList(list)
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {
        sidebarList.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              button
              onClick={() => handleItemClick(item)}
            >
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>

              <ListItemText primary={item.title}/>

              {
                item.items?.length && (
                  <ExpandMore 
                    className={`${classes.expand} ${item.opened && classes.expandReversed}`}
                  />
                )
              }
            </ListItem>

            <Collapse in={item.opened} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
              >
                {
                  item.items?.map((item, index) => (
                    <ListItem 
                      onClick={() => history.push(item.url)}
                      className={classes.nested}
                      button 
                      key={index}
                    >
                      <ListItemIcon>
                        <StarBorder/>
                      </ListItemIcon>
                      <ListItemText primary={item.title}/>
                    </ListItem>
                  ))
                }
              </List>
            </Collapse>
          </React.Fragment>
        ))
      }
    </List>
  );
}