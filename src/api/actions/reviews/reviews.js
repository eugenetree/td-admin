import fetch from '@api/fetch'
import routes from '@api/api-routes'

export default {
	getList(page) {
		return fetch.get(`${routes.reviews}?page=${page}`)
	},
	createItem(data) {
		return fetch.post(routes.reviews, data)
	},
	getItem(slug) {
		return fetch.get(`${routes.reviews}/${slug}`)
	},
	updateItem(slug, data) {
		return fetch.post(`${routes.reviews}/${slug}`, data)
	},
	deleteItem(slug) {
		return fetch.delete(`${routes.reviews}/${slug}`)
	}
}
