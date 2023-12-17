import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom'
import { Syndicate, Auth, Dashboard } from '../pages'
import { EmptyLayout } from '../layouts'
import SidebarLayout from '../layouts/SidebarLayout'
import RequireRoles from './RequireRole'
import { Entry } from './Entry'
import PreventAuth from './PreventAuth'

const routes: RouteObject[] = [
	{
		path: '/',
		Component: Entry,
	},
	{
		Component: EmptyLayout,
		children: [
			{ path: '/panel', Component: () => RequireRoles(Syndicate, ['admin']) },
			{ path: '/auth', Component: () => PreventAuth(Auth) },
		],
	},
	{
		Component: SidebarLayout,
		children: [{ path: '/dashboard', Component: () => RequireRoles(Dashboard, ['syndicate']) }],
	},
]

const router = createBrowserRouter(routes)

export default router
