import { Avatar, Badge, Button, Flex, HStack, Td, Text, Tooltip, Tr, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import defaultAvatar from '../../assets/avatar.png'
import { CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import AppTooltip from '../custom/AppTooltip'
import { useApartmentModal, useConfirmationModal } from '../../contexts'
type ApartmentTableRowProps = {
	apartment: TApartment
}
const ApartmentTableRow: React.FC<ApartmentTableRowProps> = ({ apartment }) => {
	const { _id, floor, number, owner, payedMonths, status } = apartment
	const textColor = useColorModeValue('gray.700', 'white')
	const bgStatus = useColorModeValue('gray.400', '#1a202c')
	const colorStatus = useColorModeValue('white', 'gray.400')
	const { onEdit } = useApartmentModal()
	const { onOpen } = useConfirmationModal()
	return (
		<Tr>
			<Td minWidth={{ sm: '250px' }} pl="0px" py="2">
				<Flex align="center" py="2" minWidth="100%" flexWrap="nowrap">
					<Avatar src={owner.image ?? defaultAvatar} w="50px" borderRadius="12px" me="18px" />
					<Flex direction="column">
						<Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">
							{owner.name}
						</Text>
						<Text fontSize="sm" color="gray.400" fontWeight="normal">
							{owner.phone}
						</Text>
					</Flex>
				</Flex>
			</Td>
			<Td>
				<Text fontSize="md" color={textColor} fontWeight="bold">
					{number}
				</Text>
			</Td>
			<Td>
				<Text fontSize="md" color={textColor} fontWeight="bold">
					{floor}
				</Text>
			</Td>
			<Td>
				<Badge
					bg={status === 'payed' ? 'green.400' : bgStatus}
					color={status === 'payed' ? 'white' : colorStatus}
					fontSize="sm"
					p="3px 10px"
					textTransform="uppercase"
					borderRadius="8px"
				>
					{status === 'payed' ? 'payé' : 'non '}
				</Badge>
			</Td>
			<Td>
				<Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
					{payedMonths}
				</Text>
			</Td>
			<Td isNumeric>
				<HStack justify="center" spacing="10px">
					<AppTooltip label="Marquer comme payé">
						<Button
							color="blue.400"
							p="0px"
							bg="transparent"
							variant="no-hover"
							onClick={() => onOpen(_id, 'pay')}
						>
							<CheckIcon />
						</Button>
					</AppTooltip>

					<AppTooltip label="Modifier l'apartment" aria-label="A tooltip">
						<Button
							onClick={() => onEdit(apartment._id)}
							color={'gray.700'}
							p="0px"
							bg="transparent"
							variant="no-hover"
						>
							<EditIcon />
						</Button>
					</AppTooltip>
					<AppTooltip label="Supprimer l'apartment" aria-label="A tooltip">
						<Button
							onClick={() => onOpen(_id, 'delete')}
							color={'red.400'}
							p="0px"
							bg="transparent"
							variant="no-hover"
						>
							<DeleteIcon />
						</Button>
					</AppTooltip>
				</HStack>
			</Td>
		</Tr>
	)
}

export default ApartmentTableRow
