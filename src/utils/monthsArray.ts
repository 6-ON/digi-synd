export const current_month = () => ({
	y: +new Date().getFullYear().toString().slice(-2),
	m: new Date().getMonth() + 1,
})

export const getMonths = ({ m, y }: Month): Month[] =>
	Array.from({ length: 12 }, (_, i) => (m + i > 12 ? { m: m + i - 12, y: y + 1 } : { m: m + i, y: y }))
