import React, { ReactNode } from 'react'

import SliderComponent from '../../Component/Slider'
import styles from './styles.module.css'
import { FaHandPointRight, FaHandPointLeft } from 'react-icons/fa'
import { dataCard, dataSlider, dataMenuSpecial } from './data'
import { useNavigate } from 'react-router-dom'

export const Element: React.FC = (): React.ReactElement => {
  const navigate = useNavigate()
  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        <div className={styles.card}>
          {dataCard.map((items) => (
            <button
              key={items.id}
              onClick={() => navigate(`${items.navigate}`)}
              className={styles.texs}
            >
              <div className={styles.icons}>{items.icons}</div>
              <h1>{items.judul}</h1>
              <p>{items.text}</p>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.children}>
        <div>
          <div className={styles.chardleft}>
            <img src="https://img.freepik.com/premium-photo/spice-up-your-meal-with-chicken-curry-generated-by-ai_188544-14574.jpg?w=900" />
            <h1>
              Selamat datang di pengalaman kuliner yang tak terlupakan! Kami
              dengan bangga mempersembahkan promosi istimewa untuk membuat
              setiap saat makan Anda menjadi perjalanan rasa yang luar biasa.
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

type NextArrowProps = {
  currentSlide?: number
  slideCount?: number
}
const NextArrow: React.FC<NextArrowProps> = ({
  currentSlide,
  slideCount,
  ...props
}) => {
  return (
    <div>
      <div
        {...props}
        className={'next'}
        style={{
          backgroundColor: 'white',
          padding: '6px',
          position: 'absolute',
          right: '20px',
          bottom: '42%',
          borderRadius: '100%',
        }}
      >
        <FaHandPointRight size={'20px'} />
      </div>
    </div>
  )
}

const PrevArrow: React.FC<NextArrowProps> = ({
  currentSlide,
  slideCount,
  ...props
}) => {
  return (
    <div>
      <div
        {...props}
        className={'prev'}
        style={{
          backgroundColor: 'white',
          borderRadius: '100%',
          top: '42%',
          padding: '6px',
          position: 'absolute',
          left: '20px',
          zIndex: 10,
        }}
      >
        <FaHandPointLeft size={'20px'} />
      </div>
    </div>
  )
}
export const KategoriMakanan: React.FC = (): React.ReactElement => {
  const customSettings = {
    dots: false,
    slidesToShow: 5,
    arrows: true,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    <section>
      <div>
        <SliderComponent
          dataSlider={dataSlider.map((items) => (
            <div key={items.id} className="p-2 outline-none ">
              <img
                src={items.img}
                className="rounded-xl border-2 border-slate-400"
              />
            </div>
          ))}
          customSettings={customSettings}
        />
      </div>
    </section>
  )
}

export const MenuSpecial: React.FC = (): React.ReactElement => {
  return (
    <section>
      <div className=" flex justify-center flex-wrap">
        {dataMenuSpecial.map((items, index) => (
          <div key={index} className="w-[30%] rounded-lg">
            <div className="rounded-xl bg-slate-100 hover:bg-white shadow-2xl p-4 m-2">
              <img src={items.img} className="rounded-xl" />
              <h1 className="text-center font-bold text-2xl py-2">
                {items.food}
              </h1>
              <p className="italic">{items.keterangan}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
