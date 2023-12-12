import axios from 'axios'

export const mainInstance = axios.create({
	baseURL: process.env.API_URL,
	headers: {"Content-Type":"application/json","Accept":"application/json"}
})
