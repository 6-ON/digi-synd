import axios, { AxiosError, AxiosResponse } from 'axios'

export const mainInstance = axios.create({
	baseURL: process.env.API_URL,
	headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
})

mainInstance.interceptors.response.use(
	(res: AxiosResponse) => res,
	(error: AxiosError) => {
		console.error('interceptor error', error)

		if (error.response) {
			return Promise.reject(error.response.data)
		} else {
			return Promise.reject({
				message: 'Something went wrong',
				error,
			})
		}
	}
)
