import { AuthService } from '../../api/auth'
import { toast } from '../../utils/toast'
import { setUser } from '../actions'
import { AppDispatch } from '../store'

export const login =
	({ email, password }: TAuthForm) =>
	async (dispatch: AppDispatch) => {
		try {
			const result = await AuthService.login(email, password)
			dispatch(setUser(result))
			toast({ title: 'Logged in', status: 'success' })
		} catch (error) {
			toast({ title: error.message, status: 'error' })
		}
	}
