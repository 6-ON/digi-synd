import { Card, CardHeader, CardBody, Text, useColorModeValue, HStack, Button, Container, Box } from '@chakra-ui/react'
import { memo, useEffect } from 'react'
import { AddIcon } from '@chakra-ui/icons'
import { RecentFactures, MonthsNavigator } from '../components/dashboard'
import { ApartmentModal, ConfirmationModal } from '../components/Modals'
import { ConfirmationModalProvider, ApartmentProvider, useApartmentModal } from '../contexts'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { ApartmentsTable,Header } from '../components/partial'
// ------ Redux ------
import { apartmentsByMonthThunk, getFacturesThunk } from '../store/thunks'
import { AddApartmentBtn } from '../components/hoc'
// -------------------
export const DashboardPage = () => {
	const { status, apartments } = useAppSelector((state) => state.apartment)
	const factures = useAppSelector((state) => state.factures.recentFactures)
	const dispatch = useAppDispatch()

	const textColor = useColorModeValue('gray.700', 'white')
	const onMounthChange = (month: Month) => {
		dispatch<any>(apartmentsByMonthThunk(month))
	}

	useEffect(() => {
		dispatch(getFacturesThunk())
	}, [])
	useEffect(() => {
		console.log('DashboardPage render')
	})
	return (
		<Container maxW="unset">
			<Header />
			<Text fontSize="3xl" color={textColor} fontWeight="bold" mb="1rem">
				Dashboard
			</Text>
			<MonthsNavigator onMonthChange={onMounthChange} />
			<Card overflowX={{ sm: 'scroll', xl: 'hidden' }}>
				<CardHeader py="0" pt="4">
					<HStack spacing="10px">
						<Text fontSize="2xl" color={textColor} fontWeight="bold">
							Apartments
						</Text>
						<AddApartmentBtn  colorScheme="teal" variant="solid" size="md" leftIcon={<AddIcon />}>
							Ajouter
						</AddApartmentBtn>
					</HStack>
				</CardHeader>
				<CardBody>
					<Box h="md" overflowY="auto">
						<ApartmentsTable status={status} apartments={apartments} />
					</Box>
				</CardBody>
			</Card>
			<HStack justify="center" mt="2">
				<RecentFactures factures={factures} />
			</HStack>
		</Container>
	)
}
export const Dashboard = () => {
	return (
		<ConfirmationModalProvider>
			<ApartmentProvider>
				<DashboardPage />
				<ApartmentModal />
				<ConfirmationModal />
			</ApartmentProvider>
		</ConfirmationModalProvider>
	)
}
