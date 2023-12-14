import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'

const schema = Joi.object({
	name: Joi.string().trim().required().label('Name'),
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.trim()
		.required()
		.label('Email'),
	password: Joi.string().required().label('Password'),
})
export const syndicateSchema = joiResolver(schema, {
	abortEarly: false,
	errors: {
		wrap: {
			label: false,
		},
	},
})
