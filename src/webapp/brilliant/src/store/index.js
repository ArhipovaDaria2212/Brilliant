import { configureStore } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk'

import courseReducer from './slices/courseSlice'
import moduleReducer from './slices/moduleSlice'
import lessonReducer from './slices/lessonSlice'
import userReducer from "./slices/userSlice";
import pageReducer from "./slices/pageSlice";

export default configureStore({
    reducer: {
        course: courseReducer,
        module: moduleReducer,
        lesson: lessonReducer,
        user: userReducer,
        page: pageReducer,
    },
    middleware: () =>  [thunk],
})