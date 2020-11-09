import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon';
import MaterialTable, { MTableToolbar } from 'material-table';
import Pagination from '@material-ui/lab/Pagination';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles'

import { getPosts, selectPosts } from '@store/postsTable'
import { setPosts, removePosts } from "../../../store/postsTable"

const useStyles = makeStyles((theme) => ({
  img: {
    width: '30px',
    height: '30px',
    objectFit: 'cover',
    display: 'block'
  },
  pag: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2)
  },
  materialTableWrapper: {
    position: 'relative'
  },
  materialTableBackdrop: {
    position: 'absolute',
    zIndex: 100
  }
}))

const PostsTable = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const posts = useSelector(selectPosts)
  const { isFetching, pagination } = useSelector(state => state.postsTable)
  
  const columns = [
    {
      field: 'id',
      title: '#',
      sorting: false,
      width: 60
    },
    {
      field: 'img',
      title: 'Picture',
      sorting: false,
      width: 1,
      render: ({img}) => <img src={img} className={classes.img}/>
    },
    {
      field: 'title',
      title: 'Title'
    },
    {
      field: 'show',
      title: 'Show',
      width: 1,
      render: ({show}) => (
        show ? 
          <Icon>done</Icon> :
          <Icon>clear</Icon>
      )
    },
    {
      field: 'status',
      title: 'Status',
      render: ({status}) => <Button variant='outlined' disabled>{status}</Button>
    },
    {
      title: 'Actions',
      render: ({slug}) => (
        <>
          <IconButton onClick={() => history.push(`/blog/posts/edit/${slug}`)}>
            <Icon>edit</Icon>
          </IconButton>
          
          <IconButton>
            <Icon>delete</Icon>
          </IconButton>
        </>
      )      
    }

  ]

  useEffect(() => {
    if (posts.length) dispatch(removePosts())
    dispatch(getPosts(1)).then(res => {
    })
  }, [])

  const handlePagChange = (e, page) => {
    if (isFetching) return

    dispatch(getPosts(page))
      .then(() => {
        if (page === 1) history.push(history.location.pathname)
        history.push('/blog/posts?page=' + page)
      })
  }

  return (
    isFetching && posts.length === 0 ? 
      <LinearProgress/> :
        <>
          <div className={classes.materialTableWrapper}>
            <MaterialTable
              title="test"
              columns={columns}
              data={posts}
              options={{padding: 'dense', paging: false}}
            />

            <Backdrop
              classes={{root: classes.materialTableBackdrop}}
              open={isFetching}
            >
              <CircularProgress color="inherit"/>
            </Backdrop>
          </div>
          <Pagination
            className={classes.pag}
            page={pagination.currentPage}
            count={pagination.lastPage} 
            onChange={handlePagChange}
          />
        </>
  );
}

export default PostsTable;
