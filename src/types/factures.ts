type TFactureRecord = {
	_id: string
	apartment: Pick<TApartment, '_id' | 'owner'>
	createdAt: string
	month:string
}