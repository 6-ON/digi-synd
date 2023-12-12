import { useDisclosure } from '@chakra-ui/react'
import { createContext, useContext, useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { createFactureThunk, deleteApartmentThunk } from '../store/thunks'
type ModalVariant = 'delete' | 'pay'

type ConfirmationModal = {
	apartmentId: string
	variant: ModalVariant
	onClose: () => void
	onConfirm: () => void
	onOpen: (_id: string, variant: ModalVariant) => void
	isOpen: boolean
}
const ConfirmationModal = createContext<ConfirmationModal | null>(null)

export const ConfirmationModalProvider = ({ children }) => {
	const { isOpen, onOpen: handleOpen, onClose: handleClose } = useDisclosure()
	const [apartmentId, setApartment] = useState<string>()
	const [variant, setVariant] = useState<ModalVariant>('pay')
	const dispatch = useAppDispatch()

	const onClose = () => {
		handleClose()
		setApartment(undefined)
	}

	const onOpen = (_id: string, variant: ModalVariant) => {
		setVariant(variant)
		setApartment(_id)
		handleOpen()
	}

	const onConfirm = () => {
		switch (variant) {
			case 'pay':
				dispatch<any>(createFactureThunk(apartmentId))
				break
			case 'delete':
				dispatch<any>(deleteApartmentThunk(apartmentId))
				break
			default:
				break
		}
		handleClose()
	}

	return (
		<ConfirmationModal.Provider value={{ onClose, onOpen, onConfirm, apartmentId, isOpen, variant: variant }}>
			{children}
		</ConfirmationModal.Provider>
	)
}
export const useConfirmationModal = () => useContext(ConfirmationModal)
