import { useAppSelector } from '../../redux/hook'
import CardMenu from '../../Component/CardMenu'
import NoteMenu from '../../Component/CatatanMenu'
import LayOut from '../../Component/LayOut'
import React, { useState } from 'react'
import SliderComponent from '../../Component/Slider'
import { dataSlider } from './data'

export const Food: React.FC = (): React.ReactElement => {
  const data = useAppSelector((state) => state.food.data)
  const [popUp, setPopUp] = useState(false)
  const hanldePopUp = () => {
    setPopUp(!popUp)
  }
  return (
    <LayOut>
      <div>
        {popUp ? (
          <div className="fixed pt-32 w-full z-20  h-[100vh]">
            <NoteMenu closePopUp={hanldePopUp} />
          </div>
        ) : null}
        <div
          className={`${popUp ? 'fixed z-10 bg-black w-full h-[100vh] opacity-50' : ''}`}
        />
        {/* <SliderComponent
          dataSlider={dataSlider.map((items) => (
            <div
              key={items.id}
              className="h-[75vh]  bg-gradient-to-br  from-zinc-300 to-slate-900"
            >
              <div className="flex h-[75vh] justify-center items-center">
                <div className="w-1/2 text-center">
                  <h1 className="text-5xl font-extrabold">
                    Welcome to example WebFood
                  </h1>
                  <p className="px-20 text-center">{items.description}</p>
                </div>
                <div className="w-1/2 h-[60vh] flex justify-center items-center">
                  <img
                    src={items.img}
                    className=" w-3/4 rounded-3xl transition-shadow shadow-2xl border-4 border-black shadow-black"
                  />
                </div>
              </div>
            </div>
          ))}
        /> */}
        <SliderComponent
          dataSlider={dataSlider.map((items, index) => (
            <div
              key={index}
              className=" bg-gradient-to-br w-full from-slate-900 to-zinc-300"
            >
              <div className="p-5 md:flex justify-center items-center">
                <div className="md:w-1/2 text-center">
                  <h1 className=" text-5xl opacity-25 font-bold pb-5">
                    Welcome to my-Web
                  </h1>
                  <div className=" flex justify-center ">
                    <p className=" line-clamp-2 text-4xl italic  text-center  md:h-auto md:line-clamp-none  ">
                      {items.description}
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:py-10  flex justify-center items-center">
                  <img
                    src={items.img}
                    className=" w-3/4 rounded-3xl transition-shadow shadow-2xl border-4 border-black shadow-black"
                  />
                </div>
              </div>
            </div>
          ))}
        />
        <div>
          <CardMenu
            onClickPopUp={hanldePopUp}
            heading="Menu makanan"
            data={data}
          />
        </div>
      </div>
    </LayOut>
  )
}
