import { mainInstance } from './config'

class ApiService {
	public async create(syndicate: TSydicForm) {
		const { data } = await mainInstance.post('/syndicate', syndicate)
		return data
	}
}

export const SyndicateService = new ApiService()
