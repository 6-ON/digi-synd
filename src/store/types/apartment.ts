export interface IApartmentState {
	apartments: TApartment[]
	selectedMonth:Month
	status: TStatus
}
export enum ApartmentActionTypes {
	GET_ALL = 'apartment/GETALL',
	GET_ONE = 'apartment/ONE',
	ADD = 'apartment/ADD',
	UPDATE = 'apartment/UPDATE',
	DELETE = 'apartment/DELETE',
	CHANGE_STATUS = 'apartment/STATUS',
	CHANGE_MONTH = 'apartment/CHANGE_MONTH',
}
export type ApartmentAction =
	| { type: ApartmentActionTypes.GET_ALL; payload: TApartment[] }
	| { type: ApartmentActionTypes.GET_ONE; payload: TApartment }
	| { type: ApartmentActionTypes.ADD; payload: TApartment }
	| { type: ApartmentActionTypes.UPDATE; payload: { _id: string; updates: Partial<TApartment> } }
	| { type: ApartmentActionTypes.DELETE; payload: string }
	| { type: ApartmentActionTypes.CHANGE_STATUS; payload: TStatus }
	| { type: ApartmentActionTypes.CHANGE_MONTH; payload: Month }

