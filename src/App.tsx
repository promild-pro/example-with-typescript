import React from 'react'
import { routes } from './Routes/router'
import { RouterProvider } from 'react-router-dom'
const App: React.FC = (): JSX.Element => {
  return <RouterProvider router={routes} />
}

export default App
