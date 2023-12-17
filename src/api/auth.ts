import { store } from '../store'
import { mainInstance, refreshInstance } from './config'
interface IUserToken {
	auth: {
		access_token: string
		refresh_token: string
	}
	user: TUser
}
class ApiService {
	public async login(email: string, password: string) {
		const {
			data: { auth, user },
		} = await mainInstance.post<IUserToken>('/auth/login', { email, password })
		localStorage.setItem('access_token', auth.access_token)
		localStorage.setItem('refresh_token', auth.refresh_token)
		localStorage.setItem('user', JSON.stringify(user))
		return user
	}
	public async me() {
		const { data: user } = await mainInstance.get<TUser>('/auth/me')
		localStorage.setItem('user', JSON.stringify(user))

		return user
	}
	public async refeshToken() {
		const { data: {auth,user} } = await refreshInstance.get<IUserToken>('/auth/refresh', {
			headers: { Authorization: `Bearer ${localStorage.getItem('refresh_token')}` },
		})
		localStorage.setItem('access_token', auth.access_token)
		localStorage.setItem('refresh_token', auth.refresh_token)
		localStorage.setItem('user', JSON.stringify(user))
		return user
	}
}

export const AuthService = new ApiService()
