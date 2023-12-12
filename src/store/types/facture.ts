export interface IFactureState {
	recentFactures: TFactureRecord[]
}

export enum FactureActionTypes {
	GET_RECENT = 'facture/RECENT',
	ADD = 'facture/ADD',
}

export type FactureAction =
	| { type: FactureActionTypes.GET_RECENT; payload: TFactureRecord[] }
	| { type: FactureActionTypes.ADD; payload: TFactureRecord }
