import { Table, Thead, Tr, Th, Tbody, useColorModeValue } from '@chakra-ui/react'
import ApartmentTableRow from '../tables/ApartmentRow'
import { TableRowSkelton } from '../skeltons'
import { useAppSelector } from '../../store/hooks'

export function ApartmentsTable() {
	const { status, apartments } = useAppSelector((state) => state.apartment)

	const textColor = useColorModeValue('gray.700', 'white')
	const isLoading = status === 'loading'
	const captions = ['Owner', 'N°', 'Etage', 'Status', 'Mois Payé']

	return (
		<Table variant="simple" color={textColor}>
			<Thead position="sticky" zIndex={10} bg="white" color="gray.400" top={0}>
				<Tr my=".4rem" pl="0px">
					{captions.map((caption, idx) => {
						return (
							<Th color="gray.400" key={idx} ps={idx === 0 ? '0px' : null}>
								{caption}
							</Th>
						)
					})}
				</Tr>
			</Thead>
			<Tbody>
				{isLoading ? (
					<>
						<TableRowSkelton />
						<TableRowSkelton />
						<TableRowSkelton />
					</>
				) : (
					apartments.map((row) => <ApartmentTableRow key={row._id} apartment={row} />)
				)}
			</Tbody>
		</Table>
	)
}
