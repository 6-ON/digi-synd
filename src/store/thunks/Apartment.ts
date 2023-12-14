import { batch } from 'react-redux'
import { ApartmentsService } from '../../api'
import { addApartment, changeMonth, changeStatus, deleteApartment, getApartments, updateApartment } from '../actions'
import { AppDispatch } from '../store'
import { toast } from '../../utils/toast'

export const getApartmentsThunk = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(changeStatus('loading'))
		const result = await ApartmentsService.getAll()
		batch(() => {
			dispatch(getApartments(result))
			dispatch(changeStatus('idle'))
		})
	} catch (err) {
		toast({ title: err.message, status: 'error' })
	}
}
export const apartmentsByMonthThunk = (m: Month) => async (dispatch: AppDispatch) => {
	try {
		batch(() => {
			console.log(m)

			dispatch(changeMonth(m)) // change month in store to use it for payments
			dispatch(changeStatus('loading'))
		})
		const result = await ApartmentsService.getAll(m)
		batch(() => {
			dispatch(getApartments(result))
			dispatch(changeStatus('idle'))
		})
	} catch (err) {
		toast({ title: err.message, status: 'error' })
	}
}

export const deleteApartmentThunk = (_id: string) => async (dispatch: AppDispatch) => {
	try {
		await ApartmentsService.delete(_id)
		dispatch(deleteApartment(_id))
	} catch (err) {
		toast({ title: err.message, status: 'error' })
	}
}

export const addApartmentThunk = (apartment: TApartmentForm) => async (dispatch: AppDispatch) => {
	try {
		const result = await ApartmentsService.create(apartment)
		dispatch(addApartment(result))
	} catch (err) {
		toast({ title: err.message, status: 'error' })
	}
}
export const updateApartmentThunk =
	(_id: string, updates: Partial<TApartmentForm>) => async (dispatch: AppDispatch) => {
		try {
			const result = await ApartmentsService.update(_id, updates)
			dispatch(updateApartment(_id, updates))
		} catch (err) {
			toast({ title: err.message, status: 'error' })
		}
	}
