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