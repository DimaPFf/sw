import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from './peopleSlice'
import editedPeopleReducer from './localEditedPerson'

export const store = configureStore({
    reducer: {
        peopleState: peopleReducer,
        editedPeopleState: editedPeopleReducer
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch