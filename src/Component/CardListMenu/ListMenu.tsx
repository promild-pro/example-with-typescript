import React, { useState } from 'react'
import { PropsCardListMenu } from '../../global/global'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { StatePesanan } from '../../global/global'
import { setSelectedData } from '../../redux/SliceFood'

export const ListMenu: React.FC<PropsCardListMenu> = ({
  headingList,
  data,
  dataDrink,
  wrap,
  order,
  onClickFood,
  onClickDink,
}): React.ReactElement => {
  const dispatch = useAppDispatch()
  // handle Food
  const [orderFood, setOrderFood] = useState<StatePesanan>(
    data.reduce((acc, items) => {
      acc[items.id] = items.totalPesanan
      return acc
    }, {} as StatePesanan),
  )
  const handleMin = (id: number) => {
    setOrderFood((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 1),
    }))
  }
  const handlePlus = (id: number) => {
    setOrderFood((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  const exportDataFood = (id: number) => {
    if (id) {
      const selectData = data
        .filter((items) => items.id === id)
        .map((items) => ({
          id: items.id,
          judul: items.judul,
          img: items.img,
          totalPesanan: orderFood[items.id],
        }))
      dispatch(setSelectedData(selectData))
    }
  }
  const hanldeWrapfood = (id: number) => {
    onClickFood()
    exportDataFood(id)
  }
  //handle Drink
  const [orderDrink, setOrderDrink] = useState<StatePesanan>(
    dataDrink.reduce((acc, items) => {
      acc[items.id] = items.totalPesanan
      return acc
    }, {} as StatePesanan),
  )
  const handleMinDrink = (id: number) => {
    setOrderDrink((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 1),
    }))
  }
  const handlePlusDrink = (id: number) => {
    setOrderDrink((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }
  const exportDataDrink = (id: number) => {
    if (id) {
      const selectData = dataDrink
        .filter((items) => items.id === id)
        .map((items) => ({
          id: items.id,
          judul: items.judul,
          img: items.img,
          totalPesanan: orderDrink[items.id],
        }))
      dispatch(setSelectedData(selectData))
    }
  }
  const hanldeWrapDrink = (id: number) => {
    onClickDink()
    exportDataDrink(id)
  }
  return (
    <section>
      <h1 className=" text-3xl text-center pt-5 font-bold ">{headingList}</h1>
      <div className=" my-5 flex flex-wrap justify-center ">
        <div className="md:w-1/2">
          <h1 className="text-center text-2xl italic font-bold">
            Menu Makanan
          </h1>
          {data.map((items) => (
            <div
              key={items.id}
              className="flex justify-around bg-slate-100 shadow-2xl rounded-xl m-5"
            >
              <div>
                <img
                  src={items.img}
                  className="w-56 h-48 lg:w-[20rem] truncate border-2 border-slate-200 rounded-xl m-2 "
                />
              </div>
              <div className=" p-2  pt-5">
                <h1 className="lg:text-3xl w-52 md:w-48 lg:w-72 p-2 font-bold truncate">
                  {items.judul}{' '}
                </h1>
                <div className="flex justify-between p-2 pt-[3rem]">
                  <h1 className="text-green-600  text-sm italic">
                    Rp.{items.harga}
                  </h1>
                  <div className="flex text-sm  items-center justify-end bg-slate-300 ">
                    <button
                      onClick={() => handleMin(items.id)}
                      className="bg-slate-100 h-4 flex items-center justify-center hover:bg-slate-200 rounded-sm w-6 m-1 "
                    >
                      -
                    </button>
                    <h1>{orderFood[items.id]}</h1>
                    <button
                      onClick={() => handlePlus(items.id)}
                      className="bg-slate-100 h-4 flex items-center justify-center hover:bg-slate-200 rounded-sm w-6 m-1 "
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="">
                  {wrap && (
                    <button
                      onClick={() => hanldeWrapfood(items.id)}
                      className="bg-blue-400 hover:bg-blue-500 w-full p-2 rounded-lg"
                    >
                      Bungkus
                    </button>
                  )}
                  {order && (
                    <div className="w-full flex justify-between ">
                      <button
                        onClick={() => hanldeWrapfood(items.id)}
                        className=" bg-green-400 hover:bg-green-500 rounded-lg m-1 p-1 md:p-2 px-3"
                      >
                        Pesan Disini
                      </button>
                      <button
                        onClick={() => hanldeWrapfood(items.id)}
                        className=" bg-blue-400 hover:bg-blue-500 rounded-lg m-1 p-1 md:p-2 px-3"
                      >
                        Bungkus
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/2">
          <h1 className="text-center text-2xl italic font-bold">
            Menu Minuman
          </h1>
          {dataDrink.map((items) => (
            <div
              key={items.id}
              className="flex justify-around bg-slate-100 shadow-2xl rounded-xl m-5"
            >
              <div>
                <img
                  src={items.img}
                  className="w-56 h-48 lg:w-[20rem] truncate border-2 border-slate-200 rounded-xl m-2 "
                />
              </div>
              <div className=" p-2 pt-5">
                <h1 className="lg:text-3xl w-52 md:w-48 lg:w-72 p-2 font-bold truncate">
                  {items.judul}{' '}
                </h1>
                <div className="flex justify-between p-2 pt-[3rem]">
                  <h1 className="text-green-600  text-sm italic">
                    Rp.{items.harga}
                  </h1>
                  <div className="flex text-sm  items-center justify-end bg-slate-300 ">
                    <button
                      onClick={() => handleMin(items.id)}
                      className="bg-slate-100 h-4 flex items-center justify-center hover:bg-slate-200 rounded-sm w-6 m-1 "
                    >
                      -
                    </button>
                    <h1>{orderFood[items.id]}</h1>
                    <button
                      onClick={() => handlePlus(items.id)}
                      className="bg-slate-100 h-4 flex items-center justify-center hover:bg-slate-200 rounded-sm w-6 m-1 "
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="">
                  {wrap && (
                    <button
                      onClick={() => hanldeWrapfood(items.id)}
                      className="bg-blue-400 hover:bg-blue-500 w-full p-2 rounded-lg"
                    >
                      Bungkus
                    </button>
                  )}
                  {order && (
                    <div className="w-full flex justify-between ">
                      <button
                        onClick={() => hanldeWrapfood(items.id)}
                        className=" bg-green-400 hover:bg-green-500 rounded-lg m-1 p-1 md:p-2 px-3"
                      >
                        Pesan Disini
                      </button>
                      <button
                        onClick={() => hanldeWrapfood(items.id)}
                        className=" bg-blue-400 hover:bg-blue-500 rounded-lg m-1 p-1 md:p-2 px-3"
                      >
                        Bungkus
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
