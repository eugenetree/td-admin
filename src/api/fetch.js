import axios from 'axios'
import { removeToken } from '@store/auth'

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost/api/admin/' : ''
const baseTimeout = 10000

export const fetch = axios.create({
	baseURL,
	baseTimeout
});

fetch.interceptors.request.use(config => {
	const store = require('@store').default
	const token = store.getState().auth.token

	if (token) config.headers.Authorization = `Bearer ${token}`

  return config
})

fetch.interceptors.response.use(response => response, err => {
	const store = require('@store').default

	if (err.response.status === 401) {
		store.dispatch(removeToken())
	}
})

export default fetch