/**
 *  support utility for react-hook-form
 * @description looping through the data/payload recursively and checking if the key is in the dirtyFields object.
    @deprecated  replaced by dirtyValues
*/

export function dirtyValuesLegacy<T>(data: T, dirtyFields: any): Partial<T> {
	return Object.fromEntries(
		Object.entries(data)
			.map(([key, value]) => {
				if (typeof value === 'object' && dirtyFields[key]) return [key, dirtyValues(value, dirtyFields[key])]
				if (dirtyFields[key]) return [key, value]
				return null
			})
			.filter(Boolean)
	)
}
/**
 *  support utility for react-hook-form
 * @description looping through the dirtyFields object recursively and getting its value from data.
*/
export function dirtyValues<T>(data: T, dirtyFields: any): Partial<T> {
	return Object.fromEntries(
		Object.entries(dirtyFields)
			.map(([key, v]) => {
				if (typeof v === 'object') return [key, dirtyValues(data[key], v)]
				return [key, data[key]]
			})
			.filter(Boolean)
	)
}
