import { useDisclosure } from '@chakra-ui/react'
import { createContext, useContext, useState } from 'react'
import { ApartmentsService } from '../api'
type ModalVariant = 'add' | 'edit'
type ApartmentModalContext = {
	apartment?: TApartment
	variant: ModalVariant
	onClose: () => void
	onEdit: (_id: string) => void
	onAdd: () => void
	isOpen: boolean
}
const ApartmentModalContext = createContext<ApartmentModalContext | null>(null)

export const ApartmentProvider = ({ children }) => {
	const { isOpen, onOpen, onClose: handleClose } = useDisclosure()
	const [apartment, setApartment] = useState<TApartment>()
	const [variant, setVariant] = useState<ModalVariant>('add')
	const onClose = () => {
		handleClose()
		setApartment(undefined)
	}
	const onEdit = async (_id: string) => {
		const res = await ApartmentsService.getOne(_id)
		setVariant('edit')
		setApartment(res)
		onOpen()
	}
	const onAdd = () => {
		setVariant('add')
		onOpen()
	}
	return (
		<ApartmentModalContext.Provider
			value={{ onClose, onAdd, onEdit, apartment: apartment, isOpen, variant: variant }}
		>
			{children}
		</ApartmentModalContext.Provider>
	)
}
export const useApartmentModal = () => useContext(ApartmentModalContext)
