type TApartment = {
	_id: string
	owner: {
		name: string
		image?: string
		phone: string
	}
	floor: number
	number: number
	isPayed: boolean
	payedMonths: string
	createdAt: string
	updatedAt: string
}

type TApartmentForm = Pick<TApartment, 'owner' | 'floor' | 'number'>