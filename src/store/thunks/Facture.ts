// ---------------------------------------------------- Thunk Facture ----------------------------------------------------

import { FactureService } from '../../api'
import { createFacture, getFactures, updateApartment } from '../actions'
import { AppDispatch, GetRootState } from '../store'
import { toast } from '../../utils/toast'

export const getFacturesThunk = () => async (dispatch: AppDispatch) => {
	try {
		const result = await FactureService.getRecent()
		dispatch(getFactures(result))
	} catch (err) {
		toast({ title: err.message, status: 'error' })
	}
}

export const createFactureThunk =
	(apartmentId: string) => async (dispatch: AppDispatch, getState: GetRootState) => {
		try {
			const month = getState().apartment.selectedMonth
			const result = await FactureService.create(apartmentId,month)
			dispatch(updateApartment(apartmentId, { isPayed :true }))
			dispatch(createFacture(result))
		} catch (err) {
			toast({ title: err.message, status: 'error' })
		}
	}
