import {
	HStack,
	Button, Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export function Header() {
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

			<Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="ghost">
				Log out
			</Button>
		</HStack>
	);
}
