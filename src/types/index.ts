type TApartment = {
	_id: string
	owner: {
		name: string
		image?: string
		phone: string
	}
	floor: number
	number: number
	status: string
	payedMonths: string
	createdAt: string
	updatedAt: string
}

type TApartmentForm = Pick<TApartment, 'owner' | 'floor' | 'number'>

type TFactureRecord = {
	_id: string
	apartment: Pick<TApartment, '_id' | 'owner'>
	createdAt: string
	pdf: string
}
type Month = {
	m: number
	y: number
}
