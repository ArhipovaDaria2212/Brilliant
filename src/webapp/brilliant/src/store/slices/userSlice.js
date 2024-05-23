import { createSlice } from '@reduxjs/toolkit'
import {getUser} from "../../utils/Api"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload;
        },
        setAvatar: (state, action) => {
            state.user = {...state.user, avatar: action.payload}
        },
    },
})

export const { setUserData,
    setAvatar } = userSlice.actions

export const fetchUserData = () => async dispatch => {
    try {
        getUser(localStorage.getItem("userId"))
            .then(data => {
                dispatch(setUserData(data));
            });
    } catch (error) {
        console.log("Ошибка при загрузке данных о пользователе")
    }
}

export default userSlice.reducer