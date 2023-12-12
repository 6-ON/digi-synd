import { FC } from 'react'
import { useApartmentModal } from '../../contexts'
import { Button, ButtonProps } from '@chakra-ui/react'

/**  
 * should be used inside AppartmentModalProvider/Context
 */
export const AddApartmentBtn: FC<ButtonProps> = (props) => {
	const { onAdd } = useApartmentModal()
	return <Button {...props} onClick={onAdd} />
}
