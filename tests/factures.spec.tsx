import { cleanup, render, screen } from '@testing-library/react'
import { RecentFactures } from '../src/components/dashboard'
import { store } from '../src/store'
import { getFactures } from '../src/store/actions'
import { randomUUID } from 'crypto'
import { Provider } from 'react-redux'

afterEach(cleanup)

describe('Factures', () => {
	const ReduxWrapper = ({ children }) => <Provider store={store}>{children}</Provider>
	const invoices: TFactureRecord[] = [
		{
			_id: randomUUID(),
			createdAt: new Date(2023, 12).toISOString(),
			apartment: {
				_id: randomUUID(),
				owner: {
					name: 'John Doe',
					phone: '+212 6 66 66 66 66',
				},
			},
			month: new Date().toISOString(),
		},
	]
	it('should render recent factures with correct data', () => {
		store.dispatch(getFactures(invoices))
		render(<RecentFactures />, { wrapper: ReduxWrapper }) 
		expect(screen.getByText(/John Doe/i)).toBeInTheDocument()
		expect(screen.getByText(/12\/2023/i)).toBeInTheDocument()
	})
})
