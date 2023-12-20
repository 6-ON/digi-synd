import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer'
import React, { FC } from 'react'
type FacturePDFProps = {
	facture: TFactureRecord
}
export const FacturePDF: FC<FacturePDFProps> = ({ facture }) => {
	const styles = StyleSheet.create({
		page: {
			backgroundColor: '#E4E4E4',
		},
		section: {
			margin: 10,
			padding: 10,
		},
		heading: {
			fontSize: 24,
			textAlign: 'center',
			marginBottom: 20,
		},
	})
	return (
		<Document>
			<Page size={'A4'} style={styles.page}>
				{/* design the page */}
				<Text style={styles.heading}>Facture</Text>
				<Text>Owner name :{facture.apartment.owner.name}</Text>
				<Text>Facture ID : {facture._id}</Text>
				<Text>Mois : {new Date(facture.month).toLocaleString().slice(3, 10)}</Text>
				<Text>Creé en : {new Date(facture.createdAt).toLocaleDateString()}</Text>
			</Page>
		</Document>
	)
}
