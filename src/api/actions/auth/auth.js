import fetchData from '../../fetchData'
import routes from '@/js/api/api-routes'

export default {
	login(data) {
		return fetchData.post(routes.login, data).catch(err => err)
	},
	logout() {
		return fetchData.post(routes.logout).catch(err => err)
	}
}
