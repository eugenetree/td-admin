import fetchData from '@/js/api/fetchData'
import routes from '@/js/api/api-routes'

export default {
	getList(page) {
		return fetchData.get(`${routes.posts}?page=${page}`)
	},
	createItem(data) {
		return fetchData.post(routes.posts, data)
	},
	getItem(slug) {
		return fetchData.get(`${routes.posts}/${slug}`)
	},
	updateItem(slug, data) {
		return fetchData.post(`${routes.posts}/${slug}`, data)
	},
	deleteItem(slug) {
		return fetchData.delete(`${routes.posts}/${slug}`)
	}
}
