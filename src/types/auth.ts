type TUser = {
	_id: string
	name: string
	email: string
	image?: string
	createdAt: string
	updatedAt: string
}

type TAuthForm = {
	email: string
	password: string
}
type TSydicForm = TAuthForm & {
	name: string
}
