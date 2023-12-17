import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import WindImage from '../assets/wind.png'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { authSchema } from '../schemas/auth'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { login } from '../store/thunks'
import { useNavigate } from 'react-router-dom'
export const Auth = () => {
	const navigate = useNavigate()
	const titleColor = useColorModeValue('teal.300', 'teal.200')
	const textColor = useColorModeValue('gray.400', 'white')
	const dispatch = useAppDispatch()
	const { control, reset, handleSubmit } = useForm<TAuthForm>({
		resolver: authSchema,
		defaultValues: {
			email: '',
			password: '',
		},
	})

	// password visibility
	const [show, setShow] = useState(false)
	const toggleShow = () => setShow(!show)

	const onSubmit: SubmitHandler<TAuthForm> = (data) => {
		dispatch(login(data, navigate))
	}
	return (
		<Flex position="relative" mb="40px">
			<DevTool control={control} />
			<Flex
				h={{ sm: 'initial', md: '75vh', lg: '85vh' }}
				w="100%"
				maxW="1044px"
				mx="auto"
				justifyContent="space-between"
				mb="30px"
				pt={{ sm: '100px', md: '0px' }}
			>
				{}
				<Flex
					alignItems="center"
					justifyContent="start"
					style={{ userSelect: 'none' }}
					w={{ base: '100%', md: '50%', lg: '42%' }}
				>
					<Flex
						direction="column"
						w="100%"
						background="transparent"
						p="48px"
						mt={{ md: '150px', lg: '80px' }}
					>
						<Heading color={titleColor} fontSize="32px" mb="10px">
							Welcome Back
						</Heading>
						<Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="14px">
							Enter your email and password to sign in
						</Text>
						<Box>
							<Controller
								render={({ field, fieldState: { invalid, error } }) => (
									<FormControl isInvalid={invalid} mb="24px">
										<FormLabel ms="4px" fontSize="sm" fontWeight="normal">
											Email
										</FormLabel>

										<Input
											borderRadius="15px"
											fontSize="sm"
											type="text"
											placeholder="Your email adress"
											size="lg"
											{...field}
										/>
										<FormErrorMessage ms="3">{error?.message}</FormErrorMessage>
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
										<FormErrorMessage ms="2">{error?.message}</FormErrorMessage>
									</FormControl>
								)}
								control={control}
								name="password"
							/>
						</Box>
						<Button
							fontSize="10px"
							type="submit"
							bg="teal.300"
							w="100%"
							h="45"
							mb="20px"
							color="white"
							mt="20px"
							onClick={handleSubmit(onSubmit)}
							_hover={{
								bg: 'teal.200',
							}}
							_active={{
								bg: 'teal.400',
							}}
						>
							SIGN IN
						</Button>
					</Flex>
				</Flex>
				<Box
					display={{ base: 'none', md: 'block' }}
					overflowX="hidden"
					h="100%"
					w="40vw"
					position="absolute"
					right="0px"
				>
					<Box
						bgImage={WindImage}
						w="100%"
						h="100%"
						bgSize="cover"
						bgPosition="50%"
						position="absolute"
						borderBottomLeftRadius="20px"
					></Box>
				</Box>
			</Flex>
		</Flex>
	)
}
