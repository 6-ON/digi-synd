export type UseMonthArray = (onChange: (month: Month) => void) => {
	months: Month[]
	shiftL: () => void
	shiftR: () => void
	setMonth: (index: number) => void
	selectedIndex: number
}