import '@fontsource/roboto'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import theme from './theme'
import { Provider, useDispatch } from 'react-redux'
import { store } from './store'
import { useEffect } from 'react'
import { getUser } from './store/thunks'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		if (localStorage.getItem('user')) dispatch<any>(getUser())
	}, [dispatch])
	return <RouterProvider router={router} />
}
const MainApp = () => {
	return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</Provider>
	)
}

export default MainApp
