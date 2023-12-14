import { mainInstance } from './config'

class ApiService {
	public async login(email: string, password: string) {
		const { data } = await mainInstance.post('/auth/login', { email, password })
		return data
	}
}

export const AuthService = new ApiService()
