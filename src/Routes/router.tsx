import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Food from '../Pages/Makanan'
import Drink from '../Pages/Minuman'
import WrapMenu from '../Pages/Bungkus'
import OrderList from '../Pages/DaftarMenu'
import About from '../Pages/About'

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
  {
    path: '/wrapMenu',
    element: <WrapMenu />,
  },
  {
    path: '/orderList',
    element: <OrderList />,
  },
  {
    path: '/about',
    element: <About />,
  },
])

export { routes }
