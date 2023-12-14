export interface AuthState {
	user: TUser | null
	status: TStatus
}
export enum AuthActionTypes {
	SET_USER = 'auth/SET_USER',
	UNSET_USER = 'auth/UNSET_USER',
	CHANGE_STATUS = 'auth/CHANGE_STATUS',
}

export type AuthAction =
	| { type: AuthActionTypes.SET_USER; payload: TUser }
	| { type: AuthActionTypes.CHANGE_STATUS; payload: TStatus }
	| { type: AuthActionTypes.UNSET_USER, payload?: undefined }
