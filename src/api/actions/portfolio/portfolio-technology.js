import fetch from '@api/fetch'
import routes from '@api/api-routes'

export default {
  getList(page) {
    return fetch.get(`${routes.technology}?page=${page}`)
  },
	createItem(data) {
		return fetch.post(routes.technology, data)
	},
	updateItem({slug, data}) {
		return fetch.post(`${routes.technology}/${slug}`, data)
	},
	deleteItem(slug) {
		return fetch.delete(`${routes.technology}/${slug}`)
	}
}
