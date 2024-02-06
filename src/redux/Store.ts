import { configureStore } from '@reduxjs/toolkit'
import Slice from '../Pages/Makanan/Slice'

// export default configureStore({
//   reducer: {},
// })
export const Store = configureStore({
  reducer: {
    food: Slice,
  },
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
