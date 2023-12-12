import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useConfirmationModal } from '../../contexts/ConfirmModal'

export const ConfirmationModal: FC = () => {
	const { isOpen, onClose, onConfirm, variant, apartmentId } = useConfirmationModal()
	return (
		<Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Confirmation</ModalHeader>
				<ModalBody>
					Are you sure you want to {variant} the apartment {apartmentId}?
				</ModalBody>
				<ModalFooter>
					<Button colorScheme="red" mr={3} onClick={onClose}>
						Cancel
					</Button>
					<Button
						textTransform={'capitalize'}
						colorScheme={variant === 'delete' ? 'red' : 'blue'}
						variant="ghost"
						onClick={onConfirm}
					>
						{variant}
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

