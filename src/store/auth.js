import { createSlice } from '@reduxjs/toolkit';
import api from '@api'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
  },
  reducers: {
    setToken(state, { payload: token }) {
      state.token = token
    },
    removeToken(state) {
      state.token = null
    }
  }
})

export const { setToken, removeToken } = authSlice.actions;

export const login = ({ email, password }) => dispatch => {
  return api.auth.login({
    email,
    password
  })
  .then(({ data }) => {
    dispatch(setToken(data.access_token))
  })
}

export const logout = () => dispatch => {
  return api.auth.logout()
    .then(() => {
      dispatch(removeToken())
    })
}

export const selectToken = state => state.auth.token

export default authSlice.reducer