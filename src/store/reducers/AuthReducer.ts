import { AuthAction, AuthActionTypes, AuthState } from '../types'
const initialState: AuthState = {
	user: null,
	status: 'idle',
}

export default function authReducer(state = initialState, { type, payload }: AuthAction): AuthState {
	switch (type) {
		case AuthActionTypes.SET_USER:
			return { ...state, user: payload }
		case AuthActionTypes.UNSET_USER:
			return { ...state, user: null }
		case AuthActionTypes.CHANGE_STATUS:
			return { ...state, status: payload }
		default:
			return state
	}
}
