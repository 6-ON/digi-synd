import { AuthAction, AuthActionTypes } from '../types'

export const setUser = (user: TUser): AuthAction => ({ type: AuthActionTypes.SET_USER, payload: user })

export const unsetUser = (): AuthAction => ({ type: AuthActionTypes.UNSET_USER })

export const setLoading = (status: TStatus): AuthAction => ({ type: AuthActionTypes.CHANGE_STATUS, payload: status })
