import fetchData from '@/js/api/fetchData'
import routes from '@/js/api/api-routes'

export default {
  getList(page) {
    return fetchData.get(`${routes.technology}?page=${page}`)
  },
	createItem(data) {
		return fetchData.post(routes.technology, data)
	},
	updateItem({slug, data}) {
		return fetchData.post(`${routes.technology}/${slug}`, data)
	},
	deleteItem(slug) {
		return fetchData.delete(`${routes.technology}/${slug}`)
	}
}
