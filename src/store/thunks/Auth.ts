import { NavigateFunction, useNavigate } from 'react-router-dom'
import { AuthService } from '../../api/auth'
import { toast } from '../../utils/toast'
import { setUser, unsetUser } from '../actions'
import { AppDispatch } from '../store'

export const login =
	({ email, password }: TAuthForm, navigate: NavigateFunction) =>
	async (dispatch: AppDispatch) => {
		try {
			const result = await AuthService.login(email, password)
			dispatch(setUser(result))
			navigate('/')
			toast({ title: 'Logged in', status: 'success' })
		} catch (error) {
			toast({ title: error.message, status: 'error' })
		}
	}
export const getUser = () => async (dispatch: AppDispatch) => {
	try {
		const result = await AuthService.me()
		dispatch(setUser(result))
	} catch (error) {
		console.log(error);
		
		toast({ title: error.message, status: 'error' })
	}
}
export const logout = (navigate: NavigateFunction) => (dispatch: AppDispatch) => {
	dispatch(unsetUser())
	localStorage.removeItem('access_token')
	localStorage.removeItem('refresh_token')
	localStorage.removeItem('user')
	navigate('/')
}
