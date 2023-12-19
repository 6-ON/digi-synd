import { SyndicateService } from '../../api/syndicate'
import { toast } from '../../utils/toast'

export const createSyndic = (syndicate: TSydicForm) => async () => {
	try {
		const result = await SyndicateService.create(syndicate)
		toast({ title: 'Syndicate created successfully', status: 'success' })
	} catch (err) {
		toast({ title: err.message, status: 'error' })
	}
}
