import { FactureAction, FactureActionTypes, IFactureState } from '../types'
const initialState: IFactureState = {
	recentFactures: [],
}
const facturesReducer = (state: IFactureState = initialState, { payload, type }: FactureAction): IFactureState => {
	switch (type) {
		case FactureActionTypes.GET_RECENT:
			return {
				...state,
				recentFactures: payload,
			}
		case FactureActionTypes.ADD:
			return {
				...state,
				recentFactures: [payload, ...state.recentFactures],
			}
		default:
			return state
	}
}

export default facturesReducer
