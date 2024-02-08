import { ReactNode } from 'react'

type PropsFood = {
  id: number
  img: string
  judul: string
  harga: string
  totalPesanan: number
}
export interface DataState {
  data: PropsFood[]
  selectedData: PropsFood[] | number
}
export interface StatePesanan {
  [key: number]: number
}
export type PropsCardListMenu = {
  headingList: string
  data: PropsFood[]
  dataDrink: PropsFood[]
  onClickFood: () => void
  onClickDink: () => void
  readonly wrap?: boolean
  readonly order?: boolean
}
export type PropsChard = {
  heading: string
  data: PropsFood[]
  onClickPopUp: () => void
}
export type Card = {
  id: number
  judul: string
  text: string
  icons?: ReactNode
  navigate?: string
}
export type Slide = {
  id: number
  img: string
  description: string
}
