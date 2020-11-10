import fetch from '@api/fetch'
import routes from '@api/api-routes'

export default {
	login(data) {
		return fetch.post(routes.login, data)
	},
	logout() {
		return fetch.post(routes.logout).catch(err => err)
	},
	refresh() {
		return fetch.post(routes.refresh)
	}
}
