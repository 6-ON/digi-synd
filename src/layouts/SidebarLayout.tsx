import { Box, Button, Card, Divider, Flex, HStack, Link, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { LogoIcon } from '../components/icons'
import { CalendarIcon } from '@chakra-ui/icons'

const SidebarLayout = () => {
	const activeBg = useColorModeValue('white', 'gray.700')
	const activeColor = useColorModeValue('gray.700', 'white')
	return (
		<HStack h="100vh" align="stretch" pt="4">
			<VStack align="stretch" w="xs" px="8" pt="1">
				<Link
					display="flex"
					lineHeight="100%"
					mb="30px"
					fontWeight="bold"
					justifyContent="center"
					alignItems="center"
					fontSize="lg"
				>
					<LogoIcon w="32px" h="32px" me="10px" />
					digiSynd
				</Link>
				<Divider />
				<VStack spacing="0px" align="stretch" mt="30px">
					<Link as={NavLink} to="#">
						<Button
							w="full"
							h="fit-content"
							py="2"
							rounded="16"
							justifyContent="start"
							bg="white"
							shadow="md"
							leftIcon={
								<Box m="1" p="3" bg="teal.200" color="white" rounded="16">
									<CalendarIcon />
								</Box>
							}
						>
							Dashboard
						</Button>
					</Link>
				</VStack>
			</VStack>
			<Box h="100vh" width="full" overflowY="scroll">
				<Outlet />
			</Box>
		</HStack>
	)
}

export default SidebarLayout
