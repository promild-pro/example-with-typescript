import React, { ReactNode } from 'react'
import { MdOutlineFastfood, MdOutlineFoodBank } from 'react-icons/md'
import { FaBowlFood } from 'react-icons/fa6'
import { BiFoodMenu } from 'react-icons/bi'

type Card = {
  id: number
  judul: string
  text: string
  icons?: ReactNode
  navigate?: string
}
export const dataCard: Card[] = [
  {
    id: 1,
    judul: 'Aneka Minuman',
    text: 'lorem ipsum',
    icons: <MdOutlineFastfood size="3rem" />,
    navigate: '/drink',
  },
  {
    id: 2,
    judul: 'Makanan',
    text: 'lorem ipsum',
    icons: <FaBowlFood size="3rem" />,
    navigate: '/food',
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

type Slide = {
  id: number
  img: string
}
export const dataSlider: Slide[] = [
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
type PropsData = {
  id: number
  img: string
  food: string
  keterangan: string
}

export const dataMenuSpecial: PropsData[] = [
  {
    id: 1,
    img: 'https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26576.jpg?w=826&t=st=1706882809~exp=1706883409~hmac=e3f195b7c65c36cb132a3843adf07f6d621d1dff54430e1a339a3a3a58417f07',
    food: 'Nasi Goreng',
    keterangan:
      'Nikmati sensasi lezat yang tak terlupakan dengan Nasi Goreng Special kami, sebuah pengalaman kuliner yang menggoda selera Anda. Dibuat dengan penuh dedikasi dan menggunakan bahan-bahan berkualitas tinggi, hidangan istimewa ini menghadirkan kombinasi harmonis antara nasi yang gurih, rempah-rempah yang khas, dan berbagai bahan tambahan yang menggiurkan. Setiap suapan membawa Anda dalam petualangan cita rasa yang menggoyang lidah, sementara aroma harumnya membuat selera Anda terus ingin mencicipi lebih banyak. Sajian Nasi Goreng Special kami bukan hanya makanan, melainkan perpaduan seni kuliner yang memukau. Rasakan kelezatan yang luar biasa dan jadikan momen makan Anda istimewa dengan hidangan ini',
  },
  {
    id: 2,
    img: 'https://img.freepik.com/premium-photo/balanced-lunch-with-grilled-chicken-salad_177613-3279.jpg?w=826',
    food: 'Ayam Goreng',
    keterangan:
      'Segera hadirkan kelezatan istimewa ke meja makan Anda dengan Ayam Goreng Special kami! Dibalut dengan rempah-rempah pilihan dan dipanggang dengan sempurna, setiap gigitan menawarkan kegurihan daging ayam yang juicy dan kriuk-kriuk renyah yang tak terlupakan. Dipadukan dengan bumbu rahasia keluarga, Ayam Goreng Special kami menghadirkan cita rasa yang unik dan memikat, membuat setiap waktu makan menjadi sebuah pesta rasa yang tak terlupakan. Hidangan ini bukan sekadar ayam goreng biasa, melainkan karya seni kuliner yang siap memanjakan lidah Anda. Segera nikmati pengalaman kuliner yang luar biasa dengan Ayam Goreng Special kami dan hadirkan kebahagiaan di setiap suapan!',
  },
  {
    id: 3,
    img: 'https://img.freepik.com/free-photo/grilled-chicken-plate-with-chili-peppers-garlic-sauce-sprinkled-with-pepper-seeds_1150-24377.jpg?w=826&t=st=1706883150~exp=1706883750~hmac=839b24f9517e6a0c15affa765382f4652f0d3d0951f62da34e546fb26e563f81',
    food: 'Bebek Goreng',
    keterangan:
      'Nikmati kelezatan yang tiada tanding dengan Bebek Goreng Special kami, sebuah hidangan klasik yang selalu memikat selera Anda. Dibuat dengan teliti menggunakan bebek pilihan terbaik dan rempah-rempah tradisional yang khas, setiap gigitan menghadirkan cita rasa yang meledak di lidah Anda. Kulitnya yang renyah dan dagingnya yang juicy membuat pengalaman makan Anda tak terlupakan. Bersama dengan nasi hangat dan sambal pedas yang menggugah selera, Bebek Goreng Special kami menghadirkan kepuasan yang memenuhi setiap keinginan kuliner Anda. Sajikan hidangan istimewa ini untuk merayakan momen-momen spesial atau untuk menyenangkan lidah Anda setiap hari!',
  },
  {
    id: 4,
    img: 'https://img.freepik.com/premium-photo/pork-satay-sate-babi-pork-satay-served-with-peanut-sauce-slices-lontong-ketupat-rice-cakes_464898-189.jpg?w=826',
    food: 'Sate Ayam',
    keterangan:
      'Jelajahi kelezatan yang tak terlupakan dengan Sate Ayam Special kami, sebuah masterpiece kuliner yang memukau hati dan lidah Anda. Dibuat dengan cinta dan keahlian yang tiada tara, setiap tusukan sate membawa cita rasa yang memikat dengan kombinasi daging ayam pilihan yang lembut dan rempah-rempah khas yang meresap sempurna. Setiap gigitan memberikan ledakan rasa yang memenuhi selera, sementara aroma harumnya mengundang selera sejak jauh. Dipadukan dengan saus kacang khas yang kaya akan rasa dan tekstur yang sempurna, sate ayam special kami menghadirkan pengalaman makan yang tak terlupakan. Sajikan dalam suasana hangat dan ramah, hidangan ini akan menjadi pusat perhatian di setiap acara dan membuat setiap momen bersama terasa istimewa.',
  },
  {
    id: 5,
    img: 'https://img.freepik.com/free-photo/spicy-fried-tubtim-fish-salad-spicy-thai-food_1150-26482.jpg?w=826&t=st=1706883509~exp=1706884109~hmac=e9e15a5115f7f7c22a3398dede169aeabfd4a0c6536565c027c0bab603dc6ae3',
    food: 'Gurame Bakar',
    keterangan:
      'Mari sambut kelezatan sejati dengan Gurame Bakar Special kami, sebuah masterpiece kuliner yang memanjakan lidah Anda. Ikan gurame segar dipersiapkan secara khusus, kemudian dipanggang dengan keahlian dan diselimuti dengan bumbu istimewa yang memikat selera. Dengan paduan rasa gurih, pedas, dan manis yang sempurna, setiap gigitan membawa Anda dalam perjalanan rasa yang tak terlupakan. Gurame bakar kami tidak hanya sebuah hidangan, melainkan sebuah pengalaman kuliner yang memukau. Cocok untuk dinikmati bersama keluarga atau teman-teman, hidangan ini menjadi pilihan utama bagi pecinta kuliner yang menghargai cita rasa autentik dan kualitas terbaik. Segera hadirkan Gurame Bakar Special ini di meja makan Anda, dan biarkan kenikmatannya merajai setiap momen bersantap Anda.',
  },
  {
    id: 6,
    img: 'https://img.freepik.com/premium-photo/stir-fried-crab-with-spicy-salt-pepper-seafood-style_1339-125045.jpg?w=826',
    food: 'Kepiting Balar Special',
    keterangan:
      'Selamat datang di pengalaman gastronomi yang tak tertandingi dengan Kepting Bakar Special kami! Hidangan istimewa ini menjanjikan perpaduan sempurna antara kelezatan kepiting segar dan keunikan cita rasa yang dihasilkan dari proses bakar yang cermat. Setiap gigitan mengungkapkan kenikmatan daging kepiting yang lembut, dipadu dengan rempah-rempah khas yang meresap hingga ke dalam setiap serat. Nikmati sensasi kuliner yang memikat dengan sajian kami yang kaya akan rasa, serta aroma harum yang menggoda selera. Kepting Bakar Special kami tidak hanya sebuah hidangan, melainkan sebuah perjalanan kuliner yang mengangkat cita rasa seafood ke tingkat yang lebih tinggi. Mari nikmati momen istimewa Anda dengan cita rasa yang tak terlupakan dari Kepting Bakar Special kami!',
  },
]
