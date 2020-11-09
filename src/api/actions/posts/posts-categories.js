import fetch from '@api/fetch'
import routes from '@api/api-routes'

export default {
	getList(page) {
		return fetch.get(`${routes.categories}?page=${page}`)
	},
	createItem(data) {
		return fetch.post(routes.categories, data)
	},
	updateItem({slug, data}) {
		return fetch.post(`${routes.categories}/${slug}`, data)
	},
	deleteItem(slug) {
		return fetch.delete(`${routes.categories}/${slug}`)
	}
}
