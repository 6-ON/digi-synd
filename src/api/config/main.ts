import axios, { AxiosError, AxiosResponse } from 'axios'
import { AuthService } from '../auth'

export const mainInstance = axios.create({
	baseURL: process.env.API_URL,
	headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
})

mainInstance.interceptors.response.use(
	(res: AxiosResponse) => res,
	async (error: AxiosError) => {
		console.error('interceptor error', error)

		if (error.response) {
			if (error.response.status === 401) {
				await AuthService.refeshToken()

				return mainInstance.request(error.config)
			}
			if (error.response.status === 400) {
				const errors: ClassValidatorError[] = error.response.data as ClassValidatorError[]
				// put all constraints in an array (also the constraints of children
				const constraints = errors.reduce(convertConstraints, [])
				return Promise.reject({ message: 'Validation error', constraints })
			}
			return Promise.reject(error.response.data)
		} else {
			return Promise.reject({
				message: 'Something went wrong',
				error,
			})
		}
	}
)
mainInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem('access_token')
	config.headers.Authorization = token ? `Bearer ${token}` : ''
	return config
})
const convertConstraints = (acc: string[], err: ClassValidatorError) => {
	const constraints = Object.values(err.constraints ?? {})
	const childsContraints = err?.children.reduce(convertConstraints, [])
	return [...acc, ...constraints, ...(childsContraints ?? [])]
}
