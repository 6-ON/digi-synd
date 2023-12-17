import axios from 'axios'
import { store } from '../../store'
import { unsetUser } from '../../store/actions'
export const refreshInstance = axios.create({
	baseURL: process.env.API_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})

refreshInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem('refresh_token')
	config.headers.Authorization = token ? `Bearer ${token}` : ''
	return config
})
refreshInstance.interceptors.response.use(
	(res) => res,
	async (error) => {
		// wipe all tokens and user data
		localStorage.removeItem('access_token')
		localStorage.removeItem('refresh_token')
		localStorage.removeItem('user')
		store.dispatch(unsetUser())
        return Promise.reject(error)
	}
)
