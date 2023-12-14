import { SyndicateService } from '../../api/syndicate'
import { toast } from '../../utils/toast'

export const createSyndic = (syndicate: TSydicForm) => async () => {
	try {
		const result = await SyndicateService.create(syndicate)
		console.log(result)
		toast({ title: 'Syndicate created successfully', status: 'success' })
	} catch (err) {
		toast({ title: err.message, status: 'error' })
	}
}
