import { FactureAction, FactureActionTypes } from '../types'
//---------------------------------- Actions ----------------------------------//

export const getFactures = (payload: TFactureRecord[]): FactureAction => ({
	type: FactureActionTypes.GET_RECENT,
	payload,
})
export const createFacture = (payload: TFactureRecord): FactureAction => ({
	type: FactureActionTypes.ADD,
	payload,
})
