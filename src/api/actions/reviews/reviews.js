import fetchData from '@/js/api/fetchData'
import routes from '@/js/api/api-routes'

export default {
	getList(page) {
		return fetchData.get(`${routes.reviews}?page=${page}`)
	},
	createItem(data) {
		return fetchData.post(routes.reviews, data)
	},
	getItem(slug) {
		return fetchData.get(`${routes.reviews}/${slug}`)
	},
	updateItem(slug, data) {
		return fetchData.post(`${routes.reviews}/${slug}`, data)
	},
	deleteItem(slug) {
		return fetchData.delete(`${routes.reviews}/${slug}`)
	}
}
