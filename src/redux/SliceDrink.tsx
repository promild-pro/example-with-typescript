import { createSlice } from '@reduxjs/toolkit'
import { DataState } from '../global/global'

const initialState: DataState = {
  data: [
    {
      id: 1,
      judul: 'Buble Tea',
      harga: '15.000',
      img: 'https://img.freepik.com/free-photo/composition-with-delicious-thai-tea-beverage_23-2148994334.jpg?w=826&t=st=1707284369~exp=1707284969~hmac=d9715b565f8c5842c708b8841cde0caae7da8040d41a4515730c8c393f96e918',
      totalPesanan: 1,
    },
    {
      id: 2,
      judul: 'Mocktail kafein',
      harga: '18.000',
      img: 'https://img.freepik.com/premium-photo/ice-coffee-with-ice-coffee-with-cannabis-leaf-tablecannabis-leaf-table_76440-1359.jpg?size=626&ext=jpg&ga=GA1.1.151688275.1706446944&semt=ais',
      totalPesanan: 1,
    },
    {
      id: 3,
      judul: 'Matcha latte',
      harga: '16.000',
      img: 'https://img.freepik.com/free-photo/iced-green-tea-milkshake_1339-5939.jpg?size=626&ext=jpg&ga=GA1.1.151688275.1706446944&semt=ais',
      totalPesanan: 1,
    },
    {
      id: 4,
      judul: 'Soda jeruk',
      harga: '12.000',
      img: 'https://img.freepik.com/free-photo/rose-exotic-cocktail-fruit-blue_155003-2054.jpg?size=626&ext=jpg&ga=GA1.1.151688275.1706446944&semt=ais',
      totalPesanan: 1,
    },
    {
      id: 5,
      judul: 'Hot chocolate',
      harga: '12.000',
      img: 'https://img.freepik.com/premium-photo/hot-chocolate-with-milk-whipped-cream-grated-chocolate-cup-closeup_1220-5669.jpg?size=626&ext=jpg&ga=GA1.1.151688275.1706446944&semt=ais',
      totalPesanan: 1,
    },
    {
      id: 6,
      judul: 'Macchiato',
      harga: '12.000',
      img: 'https://img.freepik.com/free-photo/delicious-quality-coffee-cup_23-2150691367.jpg?size=626&ext=jpg&ga=GA1.1.151688275.1706446944&semt=sph',
      totalPesanan: 1,
    },
  ],
  selectedData: 0,
}
const sliceDrink = createSlice({
  name: 'drink',
  initialState,
  reducers: {},
})
export default sliceDrink.reducer
