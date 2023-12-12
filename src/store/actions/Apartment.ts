// ---------------------------------------------------- Actions ----------------------------------------------------

import { ApartmentAction, TStatus, ApartmentActionTypes } from '../types'

export const getApartments = (payload: TApartment[]): ApartmentAction => ({
	type: ApartmentActionTypes.GET_ALL,
	payload,
})
export const getApartment = (payload: TApartment): ApartmentAction => ({
	type: ApartmentActionTypes.GET_ONE,
	payload,
})

export const addApartment = (payload: TApartment): ApartmentAction => ({
	type: ApartmentActionTypes.ADD,
	payload,
})

export const updateApartment = (_id: string, updates: Partial<TApartment>): ApartmentAction => ({
	type: ApartmentActionTypes.UPDATE,
	payload: { _id, updates },
})

export const deleteApartment = (payload: string): ApartmentAction => ({
	type: ApartmentActionTypes.DELETE,
	payload,
})

export const changeStatus = (payload: TStatus): ApartmentAction => ({
	type: ApartmentActionTypes.CHANGE_STATUS,
	payload,
})
export const changeMonth = (payload: Month): ApartmentAction => ({ type: ApartmentActionTypes.CHANGE_MONTH, payload })
