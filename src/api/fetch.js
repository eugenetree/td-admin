import axios from 'axios'
import store from '@store'

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost/api/admin/' : ''
const baseTimeout = 10000

export const publicFetch = axios.create({
	baseURL,
	baseTimeout
});


export const privateFetch = (params) => {
	const token = store.getState().auth.token
	if (!token) throw new Error()
	else {
		params.header.Authorization = `Bearer ${token}`
		return publicFetch(params)
	}
}

// privateFetch.interceptors.request.use(
  // config => {
		// config.headers.Authorization = `Bearer ${store.getState().auth.token}`;
    // return config;
  // },
  // error => Promise.reject(error)
// );
