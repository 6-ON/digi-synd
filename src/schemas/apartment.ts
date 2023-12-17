import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'

const schema = Joi.object({
	floor: Joi.number().required().label('Floor'),
	number: Joi.number().required().label('Number'),
	owner: Joi.object({
		name: Joi.string().trim().required().label('Owner name'),
		phone: Joi.string()
			.regex(/^(?:\+?\d{1,4}\s?\(?\d{1,}\)?\s?\d{1,}[-\s]?\d{1,}|0\d{9,10})$/)
			.trim()
			.required()
			.label('Owner phone'),
	}),
})
export const apartmentSchema = joiResolver(schema, {
	abortEarly: false,
	errors: {
		wrap: {
			label: false,
		},
	},
})
