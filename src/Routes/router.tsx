import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Food from '../Pages/Makanan'
import Drink from '../Pages/Minuman'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/food',
    element: <Food />,
  },
  {
    path: '/drink',
    element: <Drink />,
  },
])

export { routes }
