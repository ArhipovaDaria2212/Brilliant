import { createSlice } from '@reduxjs/toolkit'

export const SETTINGS = "settings"
export const PROFILE = "profile"
export const COURSES = "courses"

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        active: PROFILE,
    },
    reducers: {
        setActivePage: (state, action) => {
            state.active = action.payload;
        },
    },
})

export const { setActivePage } = pageSlice.actions

export default pageSlice.reducer