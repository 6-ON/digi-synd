type Month = {
	m: number
	y: number
}
type TStatus = 'idle' | 'loading' | 'failed'

type ClassValidatorError = {
	target: any
	property: string
	children: ClassValidatorError[]
	constraints: {
		[key: string]: string
	}
}
