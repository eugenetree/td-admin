import fetch from '@api/fetch'
import routes from '@api/api-routes'

export default {
	getList() {
		return fetch.get(routes.tags)
	},
	updateItem(data) {
		return fetch.post(routes.tags, data)
	}
}
