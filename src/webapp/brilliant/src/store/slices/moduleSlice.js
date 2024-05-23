import { createSlice } from '@reduxjs/toolkit'
import {getModules} from "../../utils/Api"

export const moduleSlice = createSlice({
    name: 'module',
    initialState: {
        modules: [],
        activeModule: JSON.parse(localStorage.getItem("active-module"))
    },
    reducers: {
        getModulesAction: (state, action) => {
            state.modules = action.payload
        },
        setActiveModule: (state, action) => {
            state.activeModule = action.payload
            localStorage.setItem("active-module", JSON.stringify(state.activeModule))
        },
    },
})

export const { getModulesAction,
    setActiveModule } = moduleSlice.actions

export const fetchModules = (id) => async dispatch => {
    try {
        getModules(id)
            .then((res) => {
                dispatch(getModulesAction(res))
                dispatch(setActiveModule({...res[0], index: 1}))
            })
    } catch (error) {
        console.log("Ошибка при загрузке модулей")
    }
}

export default moduleSlice.reducer