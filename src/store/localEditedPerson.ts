import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LocalPeople, People } from '../types'
import { PeopleState } from './peopleSlice'

export interface LocalEditedPeopleState {
  localEditedPeople: LocalPeople,
}

const initialState: LocalEditedPeopleState = {
  localEditedPeople: {},
}

export const localEditedPeopleSlice = createSlice({
  name: 'localEditedPeople',
  initialState,
  reducers: {
    addEditedPeople: (state, action: PayloadAction<People>) => {
      state.localEditedPeople[action.payload.name] = action.payload
    },
  },
})

export const { addEditedPeople } = localEditedPeopleSlice.actions

export default localEditedPeopleSlice.reducer