import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { HStack, Button } from '@chakra-ui/react'
import { FC } from 'react'
import { useMonthsArray } from '../../hooks/useMonthsArray'
type NaviagtorProps = {
	onMonthChange: (month: Month) => void
}
export const MonthsNavigator: FC<NaviagtorProps> = ({ onMonthChange }) => {
	const { months, selectedIndex, shiftL, shiftR, setMonth } = useMonthsArray(onMonthChange)

	return (
		<HStack spacing="10px" mb="1rem" justify={'center'}>
			<Button colorScheme="teal" onClick={shiftL} variant="solid" size="sm" children={<ArrowLeftIcon />} />
			{months.map((month, i) => (
				<Button
					colorScheme="teal"
					onClick={() => setMonth(i)}
					key={i}
					size="sm"
					variant={selectedIndex === i ? 'solid' : 'outline'}
					children={`${month.y}/${month.m}`}
				/>
			))}
			<Button colorScheme="teal" onClick={shiftR} variant="solid" size="sm" children={<ArrowRightIcon />} />
		</HStack>
	)
}
