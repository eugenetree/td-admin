import fetch from '@api/fetch'
import routes from '@api/api-routes'

export default {
	getList(page) {
		return fetch.get(`${routes.posts}?page=${page}`)
	},
	createItem(data) {
		return fetch.post(routes.posts, data)
	},
	getItem(slug) {
		return fetch.get(`${routes.posts}/${slug}`)
	},
	updateItem(slug, data) {
		return fetch.post(`${routes.posts}/${slug}`, data)
	},
	deleteItem(slug) {
		return fetch.delete(`${routes.posts}/${slug}`)
	}
}
