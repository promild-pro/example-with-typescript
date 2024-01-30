import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
// import Login from '@/Pages/Login'
// const Dashboard = React.lazy(() => import('@/Pages/Dashboard'))

// const router: Route[] = [
//   {
//     path: '',
//     component: <Dashboard />,
//   },
//   // {
//   //   path: '',
//   //   component:
//   // }
// ]

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/login',
    // element: <Login />,
  },
])

export { routes }
