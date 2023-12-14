import {
	Flex,
	FormLabel,
	Input,
	Button,
	useColorModeValue,
	Box,
	InputGroup,
	InputRightElement,
	FormControl,
	FormErrorMessage,
} from '@chakra-ui/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { syndicateSchema } from '../../schemas'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { createSyndic } from '../../store/thunks/Syndic'

export function SyndicateForm() {
	const bgColor = useColorModeValue('white', 'gray.700')

	const { control, reset, handleSubmit } = useForm<TSydicForm>({
		resolver: syndicateSchema,
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	})

	// password visibility
	const [show, setShow] = useState(false)
	const toggleShow = () => setShow(!show)

	const dispatch = useAppDispatch()
	const onSubmit: SubmitHandler<TSydicForm> = async (data) => {
		await dispatch(createSyndic(data))
		reset()
	}
	return (
		<Flex
			direction="column"
			w="445px"
			background="transparent"
			borderRadius="15px"
			p="40px"
			mx={{ base: '100px' }}
			bg={bgColor}
			boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
		>
			<DevTool control={control} />
			<Box>
				<Controller
					render={({ field, fieldState: { invalid, error } }) => (
						<FormControl mb="24px" isInvalid={invalid}>
							<FormLabel ms="4px" fontSize="sm" fontWeight="normal">
								Name
							</FormLabel>
							<Input
								fontSize="sm"
								ms="4px"
								borderRadius="15px"
								type="text"
								placeholder="Syndicate's full name"
								size="lg"
								{...field}
							/>
							<FormErrorMessage>{error?.message}</FormErrorMessage>
						</FormControl>
					)}
					control={control}
					name="name"
				/>

				<Controller
					render={({ field, fieldState: { invalid, error } }) => (
						<FormControl isInvalid={invalid} mb="24px">
							<FormLabel ms="4px" fontSize="sm" fontWeight="normal">
								Email
							</FormLabel>
							<Input
								fontSize="sm"
								ms="4px"
								borderRadius="15px"
								type="email"
								placeholder="Syndicate's email address"
								size="lg"
								{...field}
							/>
							<FormErrorMessage>{error?.message}</FormErrorMessage>
						</FormControl>
					)}
					control={control}
					name="email"
				/>

				<Controller
					render={({ field, fieldState: { invalid, error } }) => (
						<FormControl isInvalid={invalid} mb="24px">
							<FormLabel ms="4px" fontSize="sm" fontWeight="normal">
								Password
							</FormLabel>
							<InputGroup size="md">
								<Input
									// pr="4.5rem"
									fontSize="sm"
									ms="4px"
									borderRadius="15px"
									size="lg"
									type={show ? 'text' : 'password'}
									placeholder="Enter password"
									{...field}
								/>
								<InputRightElement pr="1rem">
									<Button size="sm" onClick={toggleShow}>
										{show ? <ViewOffIcon /> : <ViewIcon />}
									</Button>
								</InputRightElement>
							</InputGroup>
							<FormErrorMessage>{error?.message}</FormErrorMessage>
						</FormControl>
					)}
					control={control}
					name="password"
				/>
				<Button
					type="submit"
					bg="teal.300"
					fontSize="10px"
					color="white"
					fontWeight="bold"
					w="100%"
					h="45"
					mb="24px"
					_hover={{
						bg: 'teal.200',
					}}
					_active={{
						bg: 'teal.400',
					}}
					onClick={handleSubmit(onSubmit)}
				>
					Create
				</Button>
			</Box>
		</Flex>
	)
}
