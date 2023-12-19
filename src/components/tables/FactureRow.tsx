import { CopyIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import ReactPDF, { PDFDownloadLink } from '@react-pdf/renderer'
import { FC } from 'react'
import { FacturePDF } from '../pdf'
type FactureRowProps = {
	facture: TFactureRecord
}
const FactureRow: FC<FactureRowProps> = ({ facture }) => {
	return (
		<Box bg="gray.50" rounded={10} px="6" py="8" mb={10}>
			<Flex justify="space-between">
				<VStack fontSize="sm" color="gray.500" align="start">
					<Text fontSize="lg" fontWeight="bold">
						{facture.apartment.owner.name}
					</Text>
					<Text>Facture ID : {facture._id}</Text>
					<Text>Mois : {new Date(facture.month).toLocaleString('fr').slice(3, 10)}</Text>
					<Text>Creé en : {new Date(facture.createdAt).toLocaleDateString()}</Text>
				</VStack>
				<PDFDownloadLink document={<FacturePDF facture={facture} />} fileName={`${facture._id}.pdf`}>
					<Button variant={'ghost'} leftIcon={<CopyIcon />}>
						PDF
					</Button>
				</PDFDownloadLink>
			</Flex>
		</Box>
	)
}

export default FactureRow
