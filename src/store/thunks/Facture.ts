// ---------------------------------------------------- Thunk Facture ----------------------------------------------------

import { Dispatch } from 'redux'
import { FactureAction } from '../types'
import { FactureService } from '../../api'
import { createFacture, getFactures } from '../actions'
import { GetRootState } from '../store'

export const getFacturesThunk = () => async (dispatch: Dispatch<FactureAction>) => {
	const result = await FactureService.getRecent()
	dispatch(getFactures(result))
}

export const createFactureThunk = (apartmentId:string) => async (dispatch: Dispatch<FactureAction>,getState:GetRootState) => {
	const month = getState().apartment.selectedMonth
	console.log(month,apartmentId);
	// const result = await FactureService.create()
	// dispatch(createFacture(result))
}
