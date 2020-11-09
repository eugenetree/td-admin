import { createSlice } from '@reduxjs/toolkit';
import api from '@api'
import { parseDate } from '@utils/functions/common'

export const postsTableSlice = createSlice({
  name: 'postsTable',
  initialState: {
    posts: [],
    pagination: {},
    isFetching: false
  },
  reducers: {
    setPosts(state, { payload: posts }) {
      console.log({posts})
      state.posts = posts
    },

    setPagination(state, { payload: pagination }) {
      state.pagination = pagination
    },

    setIsFetching(state, { payload: isFetching }) {
      state.isFetching = isFetching
    },

    removePosts(state) {
      state.posts = []
    }
  }
})

export const { setPosts, removePosts, setPagination, setIsFetching } = postsTableSlice.actions;

export const getPosts = page => async dispatch => {
  dispatch(setIsFetching(true))

  return api.posts.getList(page)
    .then(({ data: {data} }) => {
      dispatch(setPagination({
        currentPage: data.current_page,
        lastPage: data.last_page
      }))
      dispatch(setPosts(data.data))
    })
    .finally((what) => {
      dispatch(setIsFetching(false))
    }
  )
};

export const selectPosts = state => {
  return (
    state.postsTable.posts.map(post => ({
      id: post.id,
      img: `${window.location.protocol}//${window.location.hostname}/storage/${post.picture?.path}`,
      title: post.title,
      show: post.is_show_to_main_page,
      status: post.status,
      created: parseDate(post.created_at),
      slug: post.slug
    })
  )
)}

export default postsTableSlice.reducer