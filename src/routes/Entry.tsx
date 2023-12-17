import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Represents the Entry component.
 */
export const Entry: FC = () => {
	const nav = useNavigate()
	const user: TUser = JSON.parse(localStorage.getItem('user'))
	useEffect(() => {
		if (!user) nav('/auth')
		else {
			if (user.role === 'admin') nav('/panel')
			if (user.role === 'syndicate') nav('/dashboard')
		}
	}, [])
	return <></>
}
