import { configureStore } from '@reduxjs/toolkit'
import SliceFood from './SliceFood'
import SliceDrink from './SliceDrink'

// export default configureStore({
//   reducer: {},
// })
export const Store = configureStore({
  reducer: {
    food: SliceFood,
    drink: SliceDrink,
  },
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
