import { configureStore } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk'

import courseReducer from './slices/courseSlice'
import moduleReducer from './slices/moduleSlice'
import lessonReducer from './slices/lessonSlice'
import userReducer from "./slices/userSlice";
import pageReducer from "./slices/pageSlice";
import achiveReducer from "./slices/achiveSlice";

export default configureStore({
    reducer: {
        course: courseReducer,
        module: moduleReducer,
        lesson: lessonReducer,
        user: userReducer,
        page: pageReducer,
        achive: achiveReducer,
    },
    middleware: () =>  [thunk],
})