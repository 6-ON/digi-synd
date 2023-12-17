import React, { ComponentType, FC } from 'react'
import { Navigate } from 'react-router-dom'

/**
 * Prevents access to a component if a token is present in local storage.
 * If a token is present, it redirects to a fallback path.
 * @param component - The component to render if no token is present.
 * @param fallbackPath - The path to redirect to if a token is present. Defaults to '/'.
 * @returns The component to render or a fallback component that redirects to the fallback path.
 */

const PreventAuth:FC = (Component: ComponentType, fallbackPath: string = '/') => {
	const token = localStorage.getItem('access_token')

	return token ? <Navigate to={fallbackPath} /> : <Component />
}

export default PreventAuth
