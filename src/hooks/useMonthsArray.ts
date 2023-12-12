import { useEffect, useState } from 'react'
import { current_month, getMonths } from '../utils/monthsArray'
import { UseMonthArray } from './types'

export const useMonthsArray: UseMonthArray = (onChange) => {
	const [startMonth, setStartMonth] = useState<Month>(current_month())

	const [selectedIndex, setMonth] = useState<number>(0)

	const months = getMonths(startMonth)

	useEffect(() => {
		onChange(months[selectedIndex])
	}, [startMonth, selectedIndex])

	const shiftL = () =>
		setStartMonth(startMonth.m > 1 ? { m: startMonth.m - 1, y: startMonth.y } : { m: 12, y: startMonth.y - 1 })

	const shiftR = () =>
		setStartMonth(startMonth.m < 12 ? { m: startMonth.m + 1, y: startMonth.y } : { m: 1, y: startMonth.y + 1 })

	return { months, shiftL, shiftR, setMonth, selectedIndex }
}
