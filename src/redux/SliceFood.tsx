import { createSlice } from '@reduxjs/toolkit'
import { DataState } from '../global/global'

const initialState: DataState = {
  data: [
    {
      id: 1,
      img: 'https://img.freepik.com/free-vector/detailed-nasi-lemak-dish_52683-62627.jpg?size=626&ext=jpg&ga=GA1.1.151688275.1706446944&semt=ais',
      judul: 'Nasi Padang',
      harga: '20.000',
      totalPesanan: 1,
    },
    {
      id: 2,
      img: 'https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26576.jpg?size=626&ext=jpg&ga=GA1.1.151688275.1706446944&semt=ais',
      judul: 'Nasi Goreng',
      harga: '15.000',
      totalPesanan: 1,
    },
    {
      id: 3,
      img: 'https://img.freepik.com/free-photo/traditional-nasi-lemak-meal-composition_23-2149056822.jpg?w=826&t=st=1707194578~exp=1707195178~hmac=ac949becf745d5f766725ae8151536f32e29c103423d7c4cc4a68e9a937b5c61',
      judul: 'Nasi Lemak',
      harga: '20.000',
      totalPesanan: 1,
    },
    {
      id: 4,
      img: 'https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?size=626&ext=jpg&ga=GA1.1.151688275.1706446944&semt=ais',
      judul: 'Ayam Geprek Special',
      harga: '25.000',
      totalPesanan: 1,
    },
    {
      id: 5,
      img: 'https://img.freepik.com/premium-photo/fried-noodles-with-soy-sauce-pork_1339-37135.jpg?size=626&ext=jpg&ga=GA1.1.151688275.1706446944&semt=ais',
      judul: 'Bebek Goreng Special',
      harga: '20.000',
      totalPesanan: 1,
    },
    {
      id: 6,
      img: 'https://img.freepik.com/free-photo/chuchi-shrimp-plate-with-fresh-pepper-seeds_1150-23739.jpg?w=826&t=st=1707235584~exp=1707236184~hmac=e9a9d7ab24f6b43886ebe7d8276ba0ebf3c5f61e8230909480f3e2bc82982ca5',
      judul: 'chuchi shrimp',
      harga: '30.000',
      totalPesanan: 1,
    },
    {
      id: 7,
      img: 'https://img.freepik.com/free-photo/boiled-crayfish-with-lemon-parsley-plate_384344-5250.jpg?t=st=1707235684~exp=1707239284~hmac=e67c61848843afa97b01e89357b7ca126b8daa60caf8f77b5db479c10e2324cd&w=900',
      judul: 'Lobster Panggang',
      harga: '35.000',
      totalPesanan: 1,
    },
    {
      id: 8,
      img: 'https://img.freepik.com/free-photo/fries-chicken-isolated_1203-2889.jpg?size=626&ext=jpg&ga=GA1.1.151688275.1706446944&semt=ais',
      judul: 'Ayam Goreng',
      harga: '20.000',
      totalPesanan: 1,
    },
  ],
  selectedData: 0,
}

const SliceFood = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setSelectedData: (state, action) => {
      state.selectedData = action.payload
    },
  },
})
export const { setSelectedData } = SliceFood.actions
export default SliceFood.reducer
