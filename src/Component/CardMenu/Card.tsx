import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { setSelectedData } from '../../redux/SliceFood'
import React, { useState } from 'react'
import { PropsChard } from '../../global/global'
import { StatePesanan } from '../../global/global'

export const CardMenu: React.FC<PropsChard> = ({
  heading,
  data,
  onClickPopUp,
}): React.ReactElement => {
  // interface StatePesanan {
  //   [key: number]: number
  // }
  const dispatch = useAppDispatch()
  const [jumlahPesanan, setJumlahPesanan] = useState<StatePesanan>(
    data.reduce((acc, items) => {
      acc[items.id] = items.totalPesanan
      return acc
    }, {} as StatePesanan),
  )
  const handlePlus = (id: number) => {
    setJumlahPesanan((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }
  const handleMin = (id: number) => {
    setJumlahPesanan((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 1),
    }))
  }

  const exportModifiedData = (id: number) => {
    if (id) {
      const selectedData = data
        .filter((item) => item.id === id)
        .map((item) => ({
          id: item.id,
          judul: item.judul,
          img: item.img,
          totalPesanan: jumlahPesanan[item.id],
        }))
      dispatch(setSelectedData(selectedData))
    }
  }
  const handlePesan = (id: number) => {
    onClickPopUp() // onClik hanlde pesan
    exportModifiedData(id)
  }
  return (
    <section>
      <h1 className="text-center text-4xl py-5 font-bold ">{heading}</h1>
      <div className="flex flex-wrap justify-center">
        {data.map((items) => (
          <div
            key={items.id}
            className="w-80 bg-slate-100 rounded-xl shadow-2xl p-3 m-2"
          >
            <img
              src={items.img}
              className="rounded-xl h-52 border-2 border-slate-200"
            />
            <h1 className="font-bold py-2">{items.judul}</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm italic text-green-600">Rp.{items.harga}</p>
              <div className="flex text-sm items-center bg-slate-300">
                <button
                  onClick={() => handleMin(items.id)}
                  className="bg-slate-100 h-4 flex items-center justify-center hover:bg-slate-200 rounded-sm w-6 m-1 "
                >
                  -
                </button>
                <h1>{jumlahPesanan[items.id]}</h1>
                <button
                  onClick={() => handlePlus(items.id)}
                  className="bg-slate-100 h-4 flex items-center justify-center rounded-sm w-6 m-1 hover:bg-slate-200 "
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handlePesan(items.id)}
                className=" bg-green-400 hover:bg-green-500 rounded-lg px-3 py-2 mt-4"
              >
                Pesan Disini
              </button>
              <button
                onClick={() => handlePesan(items.id)}
                className=" bg-blue-400 hover:bg-blue-500 rounded-lg px-3 py-2 mt-4"
              >
                Bungkus
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
