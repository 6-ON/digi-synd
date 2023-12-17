import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Input,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	InputGroup,
	InputLeftElement,
	Text,
	FormControl,
	FormErrorMessage,
} from '@chakra-ui/react'
import { FC, useEffect } from 'react'
import { useApartmentModal } from '../../contexts'
import { PhoneIcon } from '@chakra-ui/icons'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { apartmentSchema } from '../../schemas'
import { dirtyValues } from '../../utils/RHF'
import { useAppDispatch } from '../../store/hooks'
import { addApartmentThunk, updateApartmentThunk } from '../../store/thunks'
import { DevTool } from '@hookform/devtools'
const emptyForm = { owner: { name: '', phone: '' } }

export const ApartmentModal: FC = () => {
	const { isOpen, variant, onClose, apartment } = useApartmentModal()
	const {
		handleSubmit,
		formState: { dirtyFields, isDirty, isValid },
		control,
		reset,
	} = useForm<TApartmentForm>({
		resolver: apartmentSchema,
		defaultValues: emptyForm,
	})

	useEffect(() => {
		console.log(apartment)
		if (apartment) {
			const {
				floor,
				number,
				owner: { name, phone },
			} = apartment
			reset({ floor: floor, number: number, owner: { name, phone } })
		} else reset(emptyForm)
	}, [isOpen,apartment])
	const dispatch = useAppDispatch()
	const onSubmit: SubmitHandler<TApartmentForm> = (data) => {
		switch (variant) {
			case 'add':
				dispatch<any>(addApartmentThunk(data))
				reset(emptyForm,{keepDefaultValues:false})
				return onClose()
			case 'edit':
				console.log(dirtyFields);
				
				dispatch<any>(updateApartmentThunk(apartment._id, dirtyValues(data, dirtyFields)))
				reset(emptyForm,{keepDefaultValues:false})
				return onClose()
			default:
				break
		}
	}

	return (
		<>
			<DevTool control={control} />
			<Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{variant === 'add' ? 'Add' : 'Update'} Apartment</ModalHeader>
					<ModalCloseButton />
					<ModalBody display="flex" flexDir="column" gap={4} mb={8}>
						<Controller
							render={({ field: { value, ...field }, fieldState: { invalid, error } }) => (
								<FormControl isInvalid={invalid}>
									<Input type="number" {...field} value={value || ''} placeholder="N°" />
									<FormErrorMessage>{error?.message}</FormErrorMessage>
								</FormControl>
							)}
							control={control}
							name="number"
						/>

						<Controller
							render={({ field, fieldState: { invalid, error } }) => (
								<FormControl isInvalid={invalid}>
									<NumberInput min={0} {...field} defaultValue={''} isInvalid={invalid}>
										<NumberInputField type="number" placeholder="Floor" />
										<NumberInputStepper>
											<NumberIncrementStepper />
											<NumberDecrementStepper />
										</NumberInputStepper>
									</NumberInput>
									<FormErrorMessage>{error?.message}</FormErrorMessage>
								</FormControl>
							)}
							control={control}
							name="floor"
						/>

						<Text fontSize="xl" fontWeight={'semibold'}>
							Owner Details
						</Text>
						<Controller
							render={({ field, fieldState: { invalid, error } }) => (
								<FormControl isInvalid={invalid}>
									<Input {...field} placeholder="Name" isInvalid={invalid} />
									<FormErrorMessage>{error?.message}</FormErrorMessage>
								</FormControl>
							)}
							control={control}
							name="owner.name"
						/>
						<Controller
							control={control}
							name="owner.phone"
							render={({ field, fieldState: { invalid, error } }) => (
								<FormControl isInvalid={invalid}>
									<InputGroup>
										<InputLeftElement pointerEvents="none">
											<PhoneIcon color="gray.300" />
										</InputLeftElement>
										<Input {...field} type="tel" placeholder="Phone" isInvalid={invalid} />
									</InputGroup>
									<FormErrorMessage>{error?.message}</FormErrorMessage>
								</FormControl>
							)}
						/>
					</ModalBody>

					<ModalFooter>
						<Button variant="ghost" colorScheme="red" mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme="teal" isDisabled={!(isDirty && isValid)} onClick={handleSubmit(onSubmit)}>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
