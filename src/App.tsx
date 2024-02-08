import React from 'react'
import { routes } from './Routes/router'
import { RouterProvider } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const App: React.FC = (): JSX.Element => {
  const isLargeScreen = useMediaQuery({ minWidth: 1321 })

  if (!isLargeScreen) {
    return (
      <div>
        Halaman ini hanya dapat dibuka dengan laptop 1321 piksel ke atas.
      </div>
    )
  }
  return <RouterProvider router={routes} />
}

export default App
