import fetchData from '@/js/api/fetchData'
import routes from '@/js/api/api-routes'

export default {
	getList(page) {
		return fetchData.get(`${routes.categories}?page=${page}`)
	},
	createItem(data) {
		return fetchData.post(routes.categories, data)
	},
	updateItem({slug, data}) {
		return fetchData.post(`${routes.categories}/${slug}`, data)
	},
	deleteItem(slug) {
		return fetchData.delete(`${routes.categories}/${slug}`)
	}
}
