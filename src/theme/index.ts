import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	fonts: {
		heading: `'Open Sans', sans-serif`,
		body: `'Roboto', sans-serif`,
	},
	styles: {
		global: {
			body: {
				bg: 'gray.50',
				color: 'gray.800',
			},
			'*': {
				'&::-webkit-scrollbar': {
					width: '6px',
					borderRadius: '8px',
					backgroundColor: `rgba(0, 0, 0, 0.05)`,
				},
				'&::-webkit-scrollbar-thumb': {
					borderRadius: '8px',
					backgroundColor: `rgba(0, 0, 0, 0.05)`,
				},
			},
		},
	},
})

export default theme
