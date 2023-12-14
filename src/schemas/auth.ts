import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'

const schema = Joi.object({
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.trim()
		.required()
		.label('Email'),
	password: Joi.string().required().label('Password'),
})
export const authSchema = joiResolver(schema, {
	abortEarly: false,
	errors: {
		wrap: {
			label: false,
		},
	},
})
