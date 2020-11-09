import fetch from '@api/fetch'
import routes from '@api/api-routes'

export default {
  getList(page) {
    return fetch.get(`${routes.letters}?page=${page}`)
  },
	deleteItem(slug) {
		return fetch.delete(`${routes.letters}/${slug}`)
  },
  getUnreadCount() {
    return fetch.get('countOfUnreadLetters')
  }
}
