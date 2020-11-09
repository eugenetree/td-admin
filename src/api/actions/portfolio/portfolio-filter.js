import fetch from '@api/fetch'
import routes from '@api/api-routes'

export default {
  getList(page) {
    return fetch.get(`${routes.portfolioFilters}?page=${page}`)
  }
}
