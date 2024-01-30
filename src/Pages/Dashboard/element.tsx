import React, { ReactNode } from 'react'
import { MdOutlineFastfood, MdOutlineFoodBank } from 'react-icons/md'
import { FaBowlFood } from 'react-icons/fa6'
import { BiFoodMenu } from 'react-icons/bi'
import SliderComponent from '../../Component/Slider'
import styles from './styles.module.css'
import { FaHandPointRight, FaHandPointLeft } from 'react-icons/fa'
// import { NextArrowProps } from 'slick-carousel'

export const Element: React.FC = (): React.ReactElement => {
  type Card = {
    id: number
    judul: string
    text: string
    icons?: ReactNode
  }
  const dataCard: Card[] = [
    {
      id: 1,
      judul: 'Aneka Minuman',
      text: 'lorem ipsum',
      icons: <MdOutlineFastfood size="3rem" />,
    },
    {
      id: 2,
      judul: 'Makanan',
      text: 'lorem ipsum',
      icons: <FaBowlFood size="3rem" />,
    },
    {
      id: 3,
      judul: 'Bungkus',
      text: 'lorem ipsum',
      icons: <MdOutlineFoodBank size="3rem" />,
    },
    {
      id: 4,
      judul: 'Daftar Semua',
      text: 'lorem ipsum',
      icons: <BiFoodMenu size="3rem" />,
    },
  ]
  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        <div className={styles.card}>
          {dataCard.map((items) => (
            <button key={items.id} className={styles.texs}>
              <div className={styles.icons}>{items.icons}</div>
              {/* <div className={styles.texs}> */}
              <h1>{items.judul}</h1>
              <p>{items.text}</p>
              {/* </div> */}
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
  type Slide = {
    id: number
    img: string
  }
  const data: Slide[] = [
    {
      id: 1,
      img: 'https://img.freepik.com/premium-photo/rendang-daging-suwir-spicy-beef-stew-from-padang-indonesia-isolated-wooden-plate-white-table_511235-1924.jpg?w=826',
    },
    {
      id: 2,
      img: 'https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-tomato-sauce_1150-20207.jpg?w=826&t=st=1706542617~exp=1706543217~hmac=ac36d3794e0495c0b78be902eb5fd2217c9049347ddec90e91f1a709493dec32',
    },
    {
      id: 3,
      img: 'https://img.freepik.com/premium-photo/rendang-daging-suwir-spicy-beef-stew-from-padang-indonesia-isolated-wooden-plate-white-table_511235-1924.jpg?w=826',
    },
    {
      id: 4,
      img: 'https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-tomato-sauce_1150-20207.jpg?w=826&t=st=1706542617~exp=1706543217~hmac=ac36d3794e0495c0b78be902eb5fd2217c9049347ddec90e91f1a709493dec32',
    },
    {
      id: 5,
      img: 'https://img.freepik.com/premium-photo/rendang-daging-suwir-spicy-beef-stew-from-padang-indonesia-isolated-wooden-plate-white-table_511235-1924.jpg?w=826',
    },
    {
      id: 6,
      img: 'https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-tomato-sauce_1150-20207.jpg?w=826&t=st=1706542617~exp=1706543217~hmac=ac36d3794e0495c0b78be902eb5fd2217c9049347ddec90e91f1a709493dec32',
    },
  ]
  return (
    <section>
      <div>
        <SliderComponent
          dataSlider={data.map((items) => (
            <div key={items.id} className="p-2 outline-none">
              <img src={items.img} className="rounded-xl" />
            </div>
          ))}
          customSettings={customSettings}
        />
      </div>
    </section>
  )
}
