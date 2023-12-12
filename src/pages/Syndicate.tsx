import { Flex, FormControl, FormLabel, Input, Button, Box, Text, useColorModeValue } from '@chakra-ui/react'
import WindSignup from '../assets/wind-sign-up.png'
import { HeaderAuth } from '../components/partial'
import { PasswordInput } from '../components/from'

export const Syndicate = () => {
	const bgColor = useColorModeValue('white', 'gray.700')
	return (
		<>
			<HeaderAuth />
			<Flex direction="column" alignSelf="center" justifySelf="center" overflow="hidden">
				<Box
					position="absolute"
					minH={{ base: '70vh', md: '50vh' }}
					w={{ md: 'calc(100vw - 50px)' }}
					borderRadius={{ md: '15px' }}
					left="0"
					right="0"
					bgRepeat="no-repeat"
					overflow="hidden"
					zIndex="-1"
					top="0"
					bgImage={WindSignup}
					bgSize="cover"
					mx={{ md: 'auto' }}
					mt={{ md: '14px' }}
				></Box>
				<Flex
					direction="column"
					textAlign="center"
					justifyContent="center"
					align="center"
					mt="6.5rem"
					mb="30px"
				>
					<Text fontSize="4xl" color="white" fontWeight="bold">
						Create a syndicate
					</Text>
				</Flex>
				<Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
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
						<FormControl>
							<FormLabel ms="4px" fontSize="sm" fontWeight="normal">
								Name
							</FormLabel>
							<Input
								fontSize="sm"
								ms="4px"
								borderRadius="15px"
								type="text"
								placeholder="Syndicate's full name"
								mb="24px"
								size="lg"
							/>
							<FormLabel ms="4px" fontSize="sm" fontWeight="normal">
								Email
							</FormLabel>
							<Input
								fontSize="sm"
								ms="4px"
								borderRadius="15px"
								type="email"
								placeholder="Syndicate's email address"
								mb="24px"
								size="lg"
							/>
							<FormLabel ms="4px" fontSize="sm" fontWeight="normal">
								Password
							</FormLabel>
							<PasswordInput />
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
							>
								Create
							</Button>
						</FormControl>
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}
