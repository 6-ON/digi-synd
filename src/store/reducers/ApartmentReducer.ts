import { current_month } from '../../utils/monthsArray'
import { ApartmentAction, IApartmentState, ApartmentActionTypes } from '../types'
import { merge } from 'lodash'
const initialState: IApartmentState = {
	apartments: [],
	status: 'idle',
	selectedMonth: current_month(),
}
const apartmentReducer = (
	state: IApartmentState = initialState,
	{ type, payload }: ApartmentAction
): IApartmentState => {
	switch (type) {
		case ApartmentActionTypes.GET_ALL:
			return { ...state, apartments: payload }
		case ApartmentActionTypes.GET_ONE:
			throw new Error('Not implemented')
		case ApartmentActionTypes.ADD:
			return { ...state, apartments: [payload, ...state.apartments] }
		case ApartmentActionTypes.UPDATE:
			return {
				...state,
				apartments: state.apartments.map((apartment) => {
					if (apartment._id === payload._id) {
						return merge({},apartment,payload.updates)
					}
					return apartment
				}),
			}
		case ApartmentActionTypes.DELETE:
			return {
				...state,
				apartments: state.apartments.filter((apartment) => apartment._id !== payload),
			}
		case ApartmentActionTypes.CHANGE_STATUS:
			return { ...state, status: payload }
		case ApartmentActionTypes.CHANGE_MONTH:
			return { ...state, selectedMonth: payload }
		default:
			return state
	}
}
export default apartmentReducer
