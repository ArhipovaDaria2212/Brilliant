import { createSlice } from '@reduxjs/toolkit'
import { getCourses } from "../../utils/Api"

export const achiveSlice = createSlice({
    name: 'course',
    initialState: {
        courses: [],
        status: 'idle',
        error: null,
        activeCourse: JSON.parse(localStorage.getItem("active-course"))
    },
    reducers: {
        getCoursesStart: state => {
            state.status = 'loading'
        },
        getCoursesSuccess: (state, action) => {
            state.status = 'succeeded'
            state.courses = action.payload
        },
        getCoursesFailure: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        setActiveCourse: (state, action) => {
            state.activeCourse = state.courses.find(course => course.id === action.payload)
            localStorage.setItem("active-course", JSON.stringify(state.activeCourse))
        },
    },
})

export const { getCoursesStart,
    getCoursesSuccess,
    getCoursesFailure,
    setActiveCourse } = courseSlice.actions

export const fetchCourses = () => async dispatch => {
    try {
        dispatch(getCoursesStart())
        getCourses()
            .then((res) => {
                dispatch(getCoursesSuccess(res))
            })
    } catch (error) {
        dispatch(getCoursesFailure("Ошибка в получении данных"))
    }
}

export default courseSlice.reducer