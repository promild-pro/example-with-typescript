import React from 'react'
// import { MdOutlineFastfood, MdOutlineFoodBank } from 'react-icons/md'
// import { FaBowlFood } from 'react-icons/fa6'
import { useAppSelector } from '../../redux/hook'
import { useNavigate } from 'react-router-dom'

type Props = {
  closePopUp: () => void
}
export const NoteMenu: React.FC<Props> = ({
  closePopUp,
  // data,
}): React.ReactElement => {
  const navigate = useNavigate()
  const dataIsSelect = useAppSelector((state) => state.food.selectedData)
  const orderAmount = Array.isArray(dataIsSelect)
    ? dataIsSelect[0]?.totalPesanan
    : dataIsSelect ?? 0
  const nameOrder = Array.isArray(dataIsSelect)
    ? dataIsSelect[0]?.judul
    : dataIsSelect ?? 0
  const imgOrder = Array.isArray(dataIsSelect)
    ? dataIsSelect[0]?.img
    : dataIsSelect ?? 0

  const handlePesan = () => {
    alert('Pesanan Berhasil')
    navigate('/')
  }
  return (
    <section className="flex justify-center items-center my-5 max-w-[1400px]">
      <div className="w-[90%] md:w-3/4 py-10 rounded-xl md:rounded-full border-2 border-green-400 bg-green-200 flex justify-center items-center">
        <div className="w-[70%] relative">
          <h1 className="text-xl md:text-2xl font-bold text-center pb-5">
            Catatan Menu
          </h1>
          <button
            onClick={closePopUp}
            className="bg-slate-400  hover:bg-slate-300 border-2 border-black shadow-md  w-10 h-10 top-0 rounded-full absolute right-0"
          >
            X
          </button>
          <div className="flex  justify-around">
            <h1 className="font-bold">Pesanan Anda</h1>
            <div className="">
              <div className="flex flex-wrap">
                <img
                  src={`${imgOrder}`}
                  className="w-20 h-20 rounded-lg mr-2"
                />
                <div className="flex justify-between text-xl  md:w-80">
                  <h1>{nameOrder}</h1>
                  <h1 className="px-2">
                    {orderAmount === 0 ? '' : orderAmount}x
                  </h1>
                </div>
              </div>
              {/* {foodElement && (
              )}
              {wrapfood && (
                <div className="flex items-center">
                  <button className="p-2 m-2 bg-slate-400 hover:bg-slate-500 rounded-lg">
                    <MdOutlineFoodBank size={20} />
                  </button>
                  <div className="flex justify-between text-xl w-80">
                    <h1>{nameOrder}</h1>
                    <h1>{orderAmount === 0 ? '' : orderAmount}x</h1>
                  </div>
                </div>
              )}
              {drinkElement && (
                <div className="flex items-center">
                  <button className="p-2 m-2 bg-slate-400 hover:bg-slate-500 rounded-lg">
                    <MdOutlineFastfood size={30} />
                  </button>
                  <div className="flex justify-between text-xl w-80">
                    <h1>{nameOrder}</h1>
                    <h1>{orderAmount === 0 ? '' : orderAmount}x</h1>
                  </div>
                </div>
              )} */}
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
