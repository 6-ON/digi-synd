// ---------------------------------------------------- Thunk Facture ----------------------------------------------------

import { Dispatch } from 'redux'
import { FactureAction } from '../types'
import { FactureService } from '../../api'
import { createFacture, getFactures } from '../actions'
import { GetRootState } from '../store'
import { toast } from '../../utils/toast'

export const getFacturesThunk = () => async (dispatch: Dispatch<FactureAction>) => {
	try {
		const result = await FactureService.getRecent()
		dispatch(getFactures(result))
	} catch (err) {
		toast({ title: err.message, status: 'error' })
	}
}

export const createFactureThunk =
	(apartmentId: string) => async (dispatch: Dispatch<FactureAction>, getState: GetRootState) => {
		try {
			const month = getState().apartment.selectedMonth
			console.log(month, apartmentId)
			// const result = await FactureService.create()
			// dispatch(createFacture(result))
		} catch (err) {
			toast({ title: err.message, status: 'error' })
		}
	}
