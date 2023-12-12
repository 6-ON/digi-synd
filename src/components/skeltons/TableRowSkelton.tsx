import { Box, Flex, Skeleton, Td } from '@chakra-ui/react'
import { FC } from 'react'

export const TableRowSkelton: FC = () => {
	return (
		<Box as="tr">
			<Td>
				<Flex w={'full'} gap="2">
					<Skeleton h="14" w="14" aspectRatio={"1"} rounded="14" />
					<Flex direction={'column'} w="full" gap="2" align={'end'} justify={'start'}>
						<Skeleton h="2" w="full" />
						<Skeleton h="1" w="full" />
					</Flex>
				</Flex>
			</Td>
			<Td>
				<Skeleton height="2rem" w={10} my={4} />
			</Td>
			<Td>
				<Skeleton height="2rem" w={10} my={4} />
			</Td>
			<Td>
				<Skeleton height="2rem" w={10} my={4} />
			</Td>
			<Td>
				<Skeleton height="2rem" w={10} my={4} />
			</Td>
			<Td>
				<Skeleton height="2rem" w="full" my={4} />
			</Td>
		</Box>
	)
}
