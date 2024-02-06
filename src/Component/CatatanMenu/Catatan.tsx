import React from 'react'
import { MdOutlineFastfood, MdOutlineFoodBank } from 'react-icons/md'
import { FaBowlFood } from 'react-icons/fa6'
import { useAppSelector } from '../../redux/hook'
import { useNavigate } from 'react-router-dom'

type Props = {
  readonly foodElement?: boolean
  readonly wrapfood?: boolean
  readonly drinkElement?: boolean
  closePopUp: () => void
}
export const NoteMenu: React.FC<Props> = ({
  closePopUp,
  foodElement,
  wrapfood,
  drinkElement,
  // data,
}): React.ReactElement => {
  const navigate = useNavigate()
  const dataIsSelect = useAppSelector((state) => state.food.selectedData)
  const foodAmount = Array.isArray(dataIsSelect)
    ? dataIsSelect[0]?.totalPesanan
    : dataIsSelect ?? 0
  const foodName = Array.isArray(dataIsSelect)
    ? dataIsSelect[0]?.judul
    : dataIsSelect ?? 0
  const handlePesan = () => {
    alert('Pesanan Berhasil')
    navigate('/')
  }
  return (
    <section className="flex justify-center items-center my-5">
      <div className="w-3/4 py-10 rounded-full border-2 border-green-400 bg-green-200 flex justify-center items-center">
        <div className="w-[70%] relative">
          <h1 className="text-2xl font-bold text-center pb-5">Catatan Menu</h1>
          <button
            onClick={closePopUp}
            className="bg-slate-400  hover:bg-slate-300 border-2 border-black shadow-md  w-10 h-10 top-0 rounded-full absolute right-0"
          >
            X
          </button>
          <div className="flex items-center justify-around">
            <h1 className="font-bold">Catatan Pesanan Anda</h1>
            <div className="grid">
              {foodElement && (
                <div className="flex items-center">
                  <button className="p-2 m-2 bg-green-400 rounded-lg">
                    <FaBowlFood size={30} />
                  </button>
                  <div className="flex justify-between text-xl w-80">
                    <h1>{foodName}</h1>
                    <h1>{foodAmount === 0 ? '' : foodAmount}x</h1>
                  </div>
                </div>
              )}
              {wrapfood && (
                <div className="flex items-center">
                  <button className="p-2 m-2 bg-slate-400 hover:bg-slate-500 rounded-lg">
                    <MdOutlineFoodBank size={20} />
                  </button>
                  <h1> : {}</h1>
                </div>
              )}
              {drinkElement && (
                <div className="flex items-center">
                  <button className="p-2 m-2 bg-slate-400 hover:bg-slate-500 rounded-lg">
                    <MdOutlineFastfood size={30} />
                  </button>
                  <h1> : {}</h1>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <KonfirmasiPesanan
                placeholder="Masukkan Nama Pemesan"
                type="text"
              />
              <KonfirmasiPesanan
                placeholder="Masukkan Nomor Meja"
                type="number"
              />
              <button
                onClick={handlePesan}
                className="p-2 bg-green-400 rounded-md"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
type PropsKonfirmasi = {
  placeholder: string
  type: string
}
const KonfirmasiPesanan: React.FC<PropsKonfirmasi> = ({
  placeholder,
  type,
}): React.ReactElement => {
  return (
    <section>
      <input
        type={type}
        placeholder={placeholder}
        className="p-2 my-2 rounded-md outline-none"
      />
    </section>
  )
}
