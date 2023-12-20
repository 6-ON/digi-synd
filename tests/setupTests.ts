// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { useNavigate } from 'react-router-dom'

// avoid react-pdf/renderer issues
jest.mock('@react-pdf/renderer', () => ({
	PDFDownloadLink: jest.fn(() => null),
}))
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(() => useNavigate),
}))
jest.mock('joi', () => {
	// Require the original module to not be mocked...
	const originalModule = jest.requireActual('joi')
	return{
		__esModule: false, // Use it when dealing with esModules
		...originalModule,
	}
})
