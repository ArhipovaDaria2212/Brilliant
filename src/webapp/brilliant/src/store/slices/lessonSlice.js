import { createSlice } from '@reduxjs/toolkit'
import {getLesson, getLessons} from "../../utils/Api"

export const lessonSlice = createSlice({
    name: 'lesson',
    initialState: {
        lessons: [],
        status: 'idle',
        error: null,
        activeLesson: {},
        activeResourceHTML: ""
    },
    reducers: {
        getLessonsStart: state => {
            state.status = 'loading'
        },
        getLessonsSuccess: (state, action) => {
            state.status = 'succeeded'
            state.lessons = action.payload
        },
        getLessonsFailure: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        setActiveLesson: (state, action) => {
            state.activeLesson = {...(state.lessons[action.payload]), index: action.payload}
            localStorage.setItem("active-lesson", JSON.stringify(state.activeLesson))
        },
        setResourceHTML: (state, action) => {
            state.activeResourceHTML = action.payload
        }
    },
})

export const { getLessonsStart,
    getLessonsSuccess,
    getLessonsFailure,
    setActiveLesson,
    setResourceHTML
} = lessonSlice.actions

export const fetchLessons = (id) => async dispatch => {
    try {
        getLessons(id)
            .then((res) => {
                dispatch(getLessonsSuccess(res))
                dispatch(setActiveLesson(0))
            })
    } catch (error) {
        dispatch(getLessonsFailure("Ошибка в получении данных"))
    }
}

export const fetchLessonResource = (path) => async dispatch => {
    try {
        dispatch(getLessonsStart())
        try {
            const res = await getLesson(path).then(
                resolve => {
                    dispatch(setResourceHTML(resolve));
                }
            );

        } catch (error) {
            dispatch(getLessonsFailure('An error occurred while fetching the data'));
        }
    } catch (error) {
        dispatch(getLessonsFailure("Ошибка в получении данных"))
    }
}

export default lessonSlice.reducer