import { RouteObject, createBrowserRouter } from 'react-router-dom'
import { Syndicate, Auth, Dashboard } from '../pages'
import { EmptyLayout } from '../layouts'
import SidebarLayout from '../layouts/SidebarLayout'

const routes: RouteObject[] = [
	{
		Component: EmptyLayout,
		children: [
			{ path: '/panel', Component: Syndicate },
			{ path: '/auth', Component: Auth },
		],
	},
	{
		Component: SidebarLayout,
		children: [{ path: '/dashboard', Component: Dashboard }],
	},
]

const router = createBrowserRouter(routes)

export default router
