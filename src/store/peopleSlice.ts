import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { People } from '../types'

export interface PeopleState {
  people: People[],
  previous: string | null,
  next: string | null,
  totalPeople: number,
  currentPage: number,
  search: string,
}

const initialState: PeopleState = {
  people: [],
  previous: null,
  next: null,
  totalPeople: 0,
  currentPage: 1,
  search: '',
}

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPeople: (state, action: PayloadAction<Omit<PeopleState, 'search'>>) => {
      return { ...state, ...action.payload }
    },
    addSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  },
})

export const { addPeople, addSearch } = peopleSlice.actions

export default peopleSlice.reducer