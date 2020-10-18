import fetchData from '@/js/api/fetchData'
import routes from '@/js/api/api-routes'

export default {
  getList(page) {
    return fetchData.get(`${routes.portfolio}?page=${page}`)
  },
	createItem(data) {
		return fetchData.post(routes.portfolio, data)
	},
	getItem(slug) {
		return fetchData.get(`${routes.portfolio}/${slug}`)
	},
	updateItem({slug, data}) {
		return fetchData.post(`${routes.portfolio}/${slug}`, data)
	},
	deleteItem(slug) {
		return fetchData.delete(`${routes.portfolio}/${slug}`)
	}
}
