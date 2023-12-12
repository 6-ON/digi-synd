import apartmentReducer from './ApartmentReducer'
import facturesReducer from './FacturesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	apartment: apartmentReducer,
	factures: facturesReducer
})

export default rootReducer