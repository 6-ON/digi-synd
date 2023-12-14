import apartmentReducer from './ApartmentReducer'
import authReducer from './AuthReducer'
import facturesReducer from './FacturesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	apartment: apartmentReducer,
	factures: facturesReducer,
	auth: authReducer,
})

export default rootReducer
