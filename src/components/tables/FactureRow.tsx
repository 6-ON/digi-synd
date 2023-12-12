import { CopyIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'
type FactureRowProps = {
	facture: TFactureRecord
}
const FactureRow: FC<FactureRowProps> = ({ facture }) => {
	return (
		<Box bg="gray.50" rounded={10} px="6" py="8" mb={10}>
			<Flex justify="space-between">
				<VStack color="gray.500" align="start">
					<Text fontSize={"xl"} fontWeight="bold">{facture.apartment.owner.name}</Text>
					<Text>Facture ID : {facture._id}</Text>
					<Text>Creé en : {facture.createdAt}</Text>
				</VStack>
				<Button variant={'ghost'} leftIcon={<CopyIcon />}>
					PDF
				</Button>
			</Flex>
		</Box>
	)
}

export default FactureRow
