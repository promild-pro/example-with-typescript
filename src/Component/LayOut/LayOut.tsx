import React from 'react'
import Food from '../../assets/food1.jpeg'
import { FaSquareInstagram, FaHouseFloodWater } from 'react-icons/fa6'
import { CiFacebook } from 'react-icons/ci'
import { FaTwitter } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

type props = {
  children: React.ReactElement
}
export const LayOut: React.FC<props> = ({ children }): React.ReactElement => {
  const navigate = useNavigate()
  return (
    <div className="h-full">
      <nav className="w-full bg-slate-900 h-16 z-50 fixed flex  items-center justify-end text-yellow-400">
        <button
          className="px-4 h-9 rounded-md font-bold hover:bg-slate-500 hover:mb-1 "
          onClick={() => navigate('/about')}
        >
          About
        </button>
        <button
          className="px-4 h-9 rounded-md font-bold hover:bg-slate-500 hover:mb-1 "
          onClick={() => navigate('/orderList')}
        >
          Product
        </button>
        <button
          onClick={() => navigate('/')}
          className="p-1 m-4 border-2 rounded-md border-yellow-400 hover:bg-slate-500"
        >
          <FaHouseFloodWater size={30} />
        </button>
      </nav>
      <div className="pt-14 w-full">{children}</div>
      <section>
        <div className="bg-slate-900 h-[30vh] flex justify-around  items-center mt-10">
          <div className="flex  items-center">
            <img src={Food} className="w-36 h-36 rounded-full mr-5" />
            <div>
              <h1 className="text-xl font-bold text-yellow-500">
                This is Website Restourant
              </h1>
              <p className="text-yellow-400">Jl.kenangan 02.</p>
            </div>
          </div>
          <div className="flex">
            <button className="border-2 text-yellow-500 border-yellow-500 hover:bg-slate-500 p-1 rounded-md">
              <FaSquareInstagram size={25} />
            </button>
            <button className="border-2 text-yellow-500 border-yellow-500 hover:bg-slate-500 p-1 rounded-md mx-2">
              <CiFacebook size={25} />
            </button>
            <button className="border-2 text-yellow-500 border-yellow-500 hover:bg-slate-500 p-1 rounded-md">
              <FaTwitter size={25} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
