import CardMenu from '../../Component/CardMenu'
import React, { useState } from 'react'
import SliderComponent from '../../Component/Slider'
import { dataSlider } from './data'
import { useAppSelector } from '../../redux/hook'
import NoteMenu from '../../Component/CatatanMenu'
import LayOut from '../../Component/LayOut'

export const Drink: React.FC = (): React.ReactElement => {
  const data = useAppSelector((state) => state.drink.data)
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
        <SliderComponent
          dataSlider={dataSlider.map((items) => (
            <div
              key={items.id}
              className="h-[75vh]  bg-gradient-to-br  from-zinc-300 to-slate-900"
            >
              <div className="flex h-[75vh] justify-center items-center">
                <div className="w-1/2 text-center">
                  <h1 className="text-5xl font-extrabold">
                    This is example drink
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
        />
        <div>
          <CardMenu
            onClickPopUp={hanldePopUp}
            heading={'Menu Minuman'}
            data={data}
          />
        </div>
      </div>
    </LayOut>
  )
}
