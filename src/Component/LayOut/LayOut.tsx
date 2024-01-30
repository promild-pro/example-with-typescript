import React from 'react'
// import { useNavigate } from 'react-router-dom'

type props = {
  children: React.ReactElement
}
export const LayOut: React.FC<props> = ({ children }): React.ReactElement => {
  // const navigate = useNavigate()
  const handleOnClick = () => {
    // navigate('')
  }
  return (
    <div>
      <nav className="w-full bg-slate-900 h-14 z-50 fixed flex  items-center justify-end text-orange-400">
        <button
          className="px-4 h-9 rounded-md font-bold hover:bg-slate-500 hover:mb-1 hover:text-orange-300"
          onClick={handleOnClick}
        >
          Home
        </button>
        <button
          className="px-4 h-9 rounded-md font-bold hover:bg-slate-500 hover:mb-1 hover:text-orange-300"
          onClick={handleOnClick}
        >
          Login
        </button>
        <button
          className="px-4 h-9 rounded-md font-bold hover:bg-slate-500 hover:mb-1 hover:text-orange-300"
          onClick={handleOnClick}
        >
          About
        </button>
        <button
          className="px-4 h-9 rounded-md font-bold hover:bg-slate-500 hover:mb-1 hover:text-orange-300"
          onClick={handleOnClick}
        >
          Product
        </button>
        <button
          className="px-4 h-9 rounded-md font-bold hover:bg-slate-500 hover:mb-1 hover:text-orange-300"
          onClick={handleOnClick}
        >
          Profile
        </button>
      </nav>
      <div className="pt-14 w-full">{children}</div>
    </div>
  )
}
