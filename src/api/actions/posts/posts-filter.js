import fetchData from '@/js/api/fetchData'
import routes from '@/js/api/api-routes'

export default {
	getList() {
		return fetchData.get(routes.postFilter)
	}
}
