import React, { useEffect } from 'react'
import LayOut from '../../Component/LayOut'
import SliderComponent from '../../Component/Slider'
import { Element, KategoriMakanan, MenuSpecial } from './element'

export const Dashboard: React.FC = (): JSX.Element => {
  type Slide = {
    id: number
    img: string
    description: string
  }

  const data: Slide[] = [
    {
      id: 1,
      img: 'https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26585.jpg?w=826&t=st=1706457145~exp=1706457745~hmac=cfad4c62e8c00f1a7db59a965ae755b9bfc10ba7b5f6c38423fd686e0463b4d2',
      description: '"Nasi Goreng"',
    },
    {
      id: 2,
      img: 'https://img.freepik.com/free-photo/yellow-noodles-cup-with-crispy-pork-slices-pork-meatballs-together-with-thai-food-style-noodles_1150-20722.jpg?w=826&t=st=1706457316~exp=1706457916~hmac=e85c7e29ec80666f5315be3da35bf1efa6665463a615255a3470c735acf1d4b2',
      description: '"Bakso"',
    },
    {
      id: 3,
      img: 'https://img.freepik.com/free-photo/crispy-fried-chicken-wooden-cutting-board_1150-20223.jpg?size=626&ext=jpg&ga=GA1.1.151688275.1706446944&semt=ais',
      description: '"Ayam Geprek"',
    },
  ]
  return (
    <LayOut>
      <div>
        <SliderComponent
          dataSlider={data.map((items, index) => (
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
        <div className="">
          <Element />
        </div>
        <section>
          <h1 className="font-bold pl-10 text-3xl">Kategori Makanan</h1>
          <KategoriMakanan />
        </section>
        <section>
          <h1 className=" text-center text-3xl font-bold py-5">Menu Special</h1>
          <MenuSpecial />
        </section>
      </div>
    </LayOut>
  )
}
