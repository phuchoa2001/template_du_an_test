import { memo, Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

import Layout from '../components/layout/Layout'
import LoadingFallback from '../components/LoadingFallback'
import Home from '../page/home/Home'
import Calendar from '../page/calendar/Calendar'


export const PUBLIC_ROUTERS = [
  { path: '/', element: <Home />, label: "home" },
  { path: '/calendar', element: <Calendar />, label: "Calendar" }
]

const PublicRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [...PUBLIC_ROUTERS]
    }
  ])

  return routes
}

const ApplicationRouters = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback fullscreen />}>{<PublicRoutes />}</Suspense>
    </BrowserRouter>
  )
}

// Prevent re-render router objecsts
export default memo(ApplicationRouters)
