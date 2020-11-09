import fetch from '@api/fetch'
import routes from '@api/api-routes'

export default {
	getList() {
		return fetch.get(routes.postFilter)
	}
}
