import { createSlice } from '@reduxjs/toolkit'
import {getAchives} from "../../utils/Api"

export const achiveSlice = createSlice({
    name: 'achives',
    initialState: {
        achives: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        getAchivesStart: state => {
            state.status = 'loading'
        },
        getAchivesSuccess: (state, action) => {
            state.status = 'succeeded'
            state.achives = action.payload
        },
        getAchivesFailure: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
    },
})

export const { getAchivesStart,
    getAchivesSuccess,
    getAchivesFailure} = achiveSlice.actions

export const fetchAchives = () => async dispatch => {
    try {
        dispatch(getAchivesStart())
        getAchives()
            .then((res) => {
                dispatch(getAchivesSuccess(res))
            })
    } catch (error) {
        dispatch(getAchivesFailure("Ошибка в получении данных о достижениях"))
    }
}

export default achiveSlice.reducer