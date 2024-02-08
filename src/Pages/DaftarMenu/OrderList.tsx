import React, { useState } from 'react'
import LayOut from '../../Component/LayOut'
import ListMenu from '../../Component/CardListMenu'
import NoteMenu from '../../Component/CatatanMenu'
import { useAppSelector } from '../../redux/hook'

export const OrderList: React.FC = (): React.ReactElement => {
  const data = useAppSelector((state) => state.food.data)
  const dataDrink = useAppSelector((state) => state.drink.data)
  const [food, setFood] = useState(false)
  const [drink, setDrink] = useState(false)
  const handleFood = () => {
    setFood(!food)
  }
  const handleDrink = () => {
    setDrink(!drink)
  }
  const handle = () => {
    setDrink(false)
    setFood(false)
  }
  return (
    <section>
      <LayOut>
        <div>
          {food || drink ? (
            <div className="fixed pt-32 w-full z-20  h-[100vh]">
              <NoteMenu closePopUp={handle} />
            </div>
          ) : null}
          <div
            className={`${food || drink ? 'fixed z-10 bg-black w-full h-[100vh] opacity-50' : ''}`}
          />
          <div>
            <ListMenu
              headingList="Selamat Menentukan Pesanan Anda"
              onClickFood={handleFood}
              onClickDink={handleDrink}
              data={data}
              dataDrink={dataDrink}
              order
            />
          </div>
        </div>
      </LayOut>
    </section>
  )
}
