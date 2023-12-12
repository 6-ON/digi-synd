import '@fontsource/roboto'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import theme from './theme'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
	return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<RouterProvider router={router} />
			</ChakraProvider>
		</Provider>
	)
}

export default App
