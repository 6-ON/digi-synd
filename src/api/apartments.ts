import { mainInstance } from './config'

class ApiService {
	public async getAll(month?: Month) {
		const search = new URLSearchParams(month as any).toString()
		const { data } = await mainInstance.get<TApartment[]>(`/apartments?${search}`)
		return data
	}

	public async getOne(id: string) {
		const { data } = await mainInstance.get<TApartment>(`/apartments/${id}`)
		return data
	}
	public async create(payload: TApartmentForm) {
		const { data } = await mainInstance.post<TApartment>('/apartments', payload)
		return data
	}
	public async update(id: string, updates: Partial<TApartmentForm>) {
		const { data } = await mainInstance.patch(`/apartments/${id}`, updates)
		return data
	}
	public async delete(id: string) {
		const { data } = await mainInstance.delete(`/apartments/${id}`)
		return data
	}
}

export const ApartmentsService = new ApiService()
