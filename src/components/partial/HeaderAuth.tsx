import { Flex, Button, Text, Box } from '@chakra-ui/react'
import { LogoIcon } from '../icons'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'



export const HeaderAuth = () => {
	return (
		<Flex
			position="fixed"
			top="16px"
			left="50%"
			transform="translate(-50%, 0px)"
			borderRadius="15px"
			px="16px"
			py="22px"
			mx="auto"
			width="1044px"
			maxW="90%"
			alignItems="center"
		>
			<Flex w="100%" justifyContent={{ sm: 'start', lg: 'space-between' }}>
				<Link to="/">
				<Box
					display="flex"
					lineHeight="100%"
					fontWeight="bold"
					justifyContent="center"
					alignItems="center"
					color="white"
				>
					<LogoIcon w="32px" h="32px" me="10px" />
					<Text fontSize="sm" mt="3px">
						digiSynd
					</Text>
				</Box>
				</Link>
				<Button
					rightIcon={<ArrowForwardIcon />}
					ml="auto"
					borderRadius="15px"
					fontSize="sm"
					fontWeight="bold"
					px="24px"
					h="40px"
					bg="teal.500"
					color="white"
					_hover={{ bg: 'teal.600' }}
					_active={{ bg: 'teal.700' }}
				>
					Logout
				</Button>
			</Flex>
		</Flex>
	)
}

