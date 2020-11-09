import { createSlice } from '@reduxjs/toolkit';
import api from '@api'
import { parseDate } from '@utils/functions/common'

export const postsTableSlice = createSlice({
  name: 'postsTable',
  initialState: {
    posts: [],
    pagination: null,
    isFetching: false
  },
  reducers: {
    setPosts(state, { payload: posts }) {
      state.posts = posts
    },

    setPagination(state, { payload: pagination }) {
      state.pagination = pagination
    },

    setIsFetching(state, { payload: isFetching }) {
      state.isFetching = isFetching
    }
  }
})

export const { setPosts, setPagination, setIsFetching } = postsTableSlice.actions;

export const getPosts = page => async dispatch => {
  dispatch(setIsFetching(true))

  await new Promise(resolve => setTimeout(() => {
    resolve()
  }, 0))

  return api.posts.getList(page)
    .then(({ data: {data} }) => {
      dispatch(setPagination({
        currentPage: data.current_page,
        lastPage: data.last_page
      }))
      dispatch(setPosts(data.data))
    })
    .finally((what) => {
      console.log(what)
      dispatch(setIsFetching(false))
    }
  )
};

export const selectPosts = state => {
  console.log(state.postsTable.posts)
  
  return (
  state.postsTable.posts.map((post, index) => ({
    index: index+1,
    img: `${window.location.protocol}//${window.location.hostname}/storage/${post.picture.path}`,
    title: post.title,
    show: post.is_show_to_main_page,
    status: post.status,
    created: parseDate(post.created_at)
  }))
)}

export default postsTableSlice.reducer