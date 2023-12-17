import { ComponentType } from 'react'
import { Navigate } from 'react-router-dom'


/**
 * Higher-order component that requires certain roles to access a component.
 * If the user has the required roles, the component is rendered. Otherwise, the user is redirected to a fallback path.
 *
 * @param Component - The component to render if the user has the required roles.
 * @param roles - An array of roles that the user must have to access the component.
 * @param fallbackPath - The path to redirect the user to if they don't have the required roles. Defaults to '/'.
 * @returns The component if the user has the required roles, otherwise a redirection to the fallback path.
 */
const RequireRoles = (Component: ComponentType, roles: Array<TUser['role']>, fallbackPath: string = '/') => {
	const token = localStorage.getItem('access_token')
	const user: TUser = JSON.parse(localStorage.getItem('user'))

	return token && roles.includes(user.role) ? <Component /> : <Navigate to={fallbackPath} />
}

export default RequireRoles
