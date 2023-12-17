import { mainInstance } from './config'

class ApiService {
	public async getRecent() {
		const { data } = await mainInstance.get<TFactureRecord[]>('/factures')
		return data
	}
	public async create(apartmentId: string, month: Month) {
		const { data } = await mainInstance.post<TFactureRecord>(`/factures/${apartmentId}`, { ...month })
		return data
	}
}

export const FactureService = new ApiService()
