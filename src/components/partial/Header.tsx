import { HStack, Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useAppDispatch } from '../../store/hooks'
import { logout } from '../../store/thunks'
import { useNavigate } from 'react-router-dom'

export function Header() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	return (
		<HStack justify={'space-between'}>
			<Breadcrumb>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Pages</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>

			<Button
				onClick={() => dispatch(logout(navigate))}
				rightIcon={<ArrowForwardIcon />}
				colorScheme="teal"
				variant="ghost"
			>
				Log out
			</Button>
		</HStack>
	)
}
