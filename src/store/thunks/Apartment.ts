import { batch } from 'react-redux'
import { ApartmentsService } from '../../api'
import { addApartment, changeMonth, changeStatus, deleteApartment, getApartments, updateApartment } from '../actions'
import { AppDispatch } from '../store'

export const getApartmentsThunk = () => async (dispatch: AppDispatch) => {
	dispatch(changeStatus('loading'))
	const result = await ApartmentsService.getAll()
	batch(() => {		
		dispatch(getApartments(result))
		dispatch(changeStatus('idle'))
	})
}
export const apartmentsByMonthThunk = (m: Month) => async (dispatch: AppDispatch) => {
	batch(() => {
		console.log(m);
	
		dispatch(changeMonth(m)) // change month in store to use it for payments
		dispatch(changeStatus('loading'))
	})
	const result = await ApartmentsService.getAll(m)
	batch(() => {		
		dispatch(getApartments(result))
		dispatch(changeStatus('idle'))
	})
}

export const deleteApartmentThunk = (_id: string) => async (dispatch: AppDispatch) => {
	await ApartmentsService.delete(_id)
	dispatch(deleteApartment(_id))
}

export const addApartmentThunk = (apartment: TApartmentForm) => async (dispatch: AppDispatch) => {
	const result = await ApartmentsService.create(apartment)
	dispatch(addApartment(result))
}
export const updateApartmentThunk =
	(_id: string, updates: Partial<TApartmentForm>) => async (dispatch: AppDispatch) => {
		const result = await ApartmentsService.update(_id, updates)
		dispatch(updateApartment(_id, updates))
	}
