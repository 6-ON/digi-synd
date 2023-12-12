import { Card, CardBody, CardHeader, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import FactureRow from '../tables/FactureRow'
import { FC } from 'react'

type RecentFacturesProps = {
	factures: TFactureRecord[]
}
export const RecentFactures: FC<RecentFacturesProps> = ({ factures }) => {
	const textColor = useColorModeValue('gray.700', 'white')
	return (
		<Card w="xl">
			<Flex direction="column">
				<CardHeader py="12px">
					<Text color={textColor} fontSize="lg" fontWeight="bold">
						Recent Factures
					</Text>
				</CardHeader>
				<CardBody>
					<Flex overflowY="scroll" h="sm" direction="column" w="100%">
						{factures.map((row) => {
							return <FactureRow key={row._id} facture={row} />
						})}
					</Flex>
				</CardBody>
			</Flex>
		</Card>
	)
}
