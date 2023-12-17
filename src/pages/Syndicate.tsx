import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react'
import WindSignup from '../assets/wind-sign-up.png'
import { HeaderSyndic } from '../components/partial'
import { SyndicateForm } from '../components/forms'

export const Syndicate = () => {
	const bgColor = useColorModeValue('white', 'gray.700')
	return (
		<>
			<HeaderSyndic />
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
					<SyndicateForm />
				</Flex>
			</Flex>
		</>
	)
}
