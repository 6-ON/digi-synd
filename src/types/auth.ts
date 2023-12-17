type TUser = {
	_id: string
	name: string
	email: string
	image?: string
	role: "admin" | "syndicate"
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
