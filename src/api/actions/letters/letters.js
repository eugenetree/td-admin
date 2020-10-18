import fetchData from '@/js/api/fetchData'
import routes from '@/js/api/api-routes'

export default {
  getList(page) {
    return fetchData.get(`${routes.letters}?page=${page}`)
  },
	deleteItem(slug) {
		return fetchData.delete(`${routes.letters}/${slug}`)
  },
  getUnreadCount() {
    return fetchData.get('countOfUnreadLetters')
  }
}
