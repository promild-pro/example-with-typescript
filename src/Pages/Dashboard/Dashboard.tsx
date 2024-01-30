import React from 'react'
import LayOut from '../../Component/LayOut'
import SliderComponent from '../../Component/Slider'
import { Element, KategoriMakanan } from './element'

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
      description:
        'Nasi Goreng, hidangan khas Indonesia, adalah kombinasi yang memikat dari nasi yang digoreng dengan sempurna bersama bumbu-bumbu khas seperti bawang putih, kecap manis, dan rempah-rempah lainnya. Dapat dihidangkan dengan berbagai tambahan seperti telur mata sapi, ayam, udang, dan acar, Nasi Goreng Indonesia menggoda selera dengan cita rasa gurih dan sedikit manis, menciptakan harmoni rasa yang tak terlupakan',
    },
    {
      id: 2,
      img: 'https://img.freepik.com/free-photo/yellow-noodles-cup-with-crispy-pork-slices-pork-meatballs-together-with-thai-food-style-noodles_1150-20722.jpg?w=826&t=st=1706457316~exp=1706457916~hmac=e85c7e29ec80666f5315be3da35bf1efa6665463a615255a3470c735acf1d4b2',
      description:
        'Bakso, adalah hidangan ikonik Indonesia yang mengundang selera dengan cita rasa yang gurih dan tekstur kenyalnya. Terbuat dari campuran daging sapi yang diolah dengan tepung tapioka dan bumbu rempah pilihan, bakso membentuk bola-bola daging yang kemudian direbus dalam kuah kaldu yang kaya rasa. Dalam penyajiannya, bakso sering disajikan bersama mie, irisan daun bawang, tauge, dan bawang goreng. Kelezatan bakso tidak hanya terletak pada rasa dagingnya yang lezat, tetapi juga pada kehangatan dan kelezatan kuahnya yang memanjakan lidah, menjadikan hidangan ini favorit di warung-warung dan restoran di seluruh Indonesia',
    },
    {
      id: 3,
      img: 'https://img.freepik.com/free-photo/crispy-fried-chicken-wooden-cutting-board_1150-20223.jpg?size=626&ext=jpg&ga=GA1.1.151688275.1706446944&semt=ais',
      description:
        'Ayam Geprek adalah hidangan street food yang sangat populer di Indonesia, memukau lidah dengan kombinasi rasa pedas, gurih, dan renyah. Hidangan ini terdiri dari ayam goreng yang digeprek atau dihancurkan, lalu disajikan dengan sambal pedas yang khas. Proses penggeprekan memberikan tekstur yang renyah pada kulit ayam, sementara sambal memberikan sentuhan pedas yang menggigit. Ayam Geprek sering disajikan dengan nasi dan lauk tambahan seperti kerupuk atau tahu. Keunikan hidangan ini tidak hanya terletak pada cita rasa yang menggoda, tetapi juga pada sensasi pengalaman makan yang berbeda, menjadikannya salah satu favorit di kalangan pencinta kuliner Indonesia.',
    },
  ]
  return (
    <LayOut>
      <div>
        <SliderComponent
          dataSlider={data.map((items) => (
            <div
              key={items.id}
              className="h-[70vh]  bg-gradient-to-br from-slate-900 to-zinc-300"
            >
              <div className="flex  justify-center items-center">
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
        />
        <div className="h-[80vh]">
          <Element />
        </div>
        <section>
          <h1 className="font-bold pl-10 text-3xl">Kategori Makanan</h1>
          <KategoriMakanan />
        </section>
      </div>
    </LayOut>
  )
}
