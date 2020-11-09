import fetch from '@api/fetch'
import routes from '@api/api-routes'

export default {
  getList(page) {
    return fetch.get(`${routes.portfolio}?page=${page}`)
  },
	createItem(data) {
		return fetch.post(routes.portfolio, data)
	},
	getItem(slug) {
		return fetch.get(`${routes.portfolio}/${slug}`)
	},
	updateItem({slug, data}) {
		return fetch.post(`${routes.portfolio}/${slug}`, data)
	},
	deleteItem(slug) {
		return fetch.delete(`${routes.portfolio}/${slug}`)
	}
}
