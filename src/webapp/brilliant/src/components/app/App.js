import './../../style/reset.scss'
import './../../style/style.scss'

import {Routes, Route, useLocation, BrowserRouter} from 'react-router-dom'
import MainPage from '../../pages/mainPage/MainPage';
import AboutUs from '../../pages/aboutUs/AboutUs';
import Authorization from '../../pages/authorization/Authorization';
import AddInfo from '../../pages/addInfo/AddInfo';
import Login from '../../pages/login/Login';
import Profile from '../../pages/profile/Profile';
import RequireAuth from "../../auth/RequireAuth";
import {AuthProvider} from "../../auth/AuthProvider";
import {Courses} from "../../pages/courses/Courses";
import Course from "../../pages/course/Course";
import Lesson from "../../pages/lesson/Lesson";

function App() {

    // const location = useLocation();

    return (
        <AuthProvider>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<MainPage/>}/>
                        <Route path='/about' element={<AboutUs/>}/>
                        <Route path='/auth' element={<Authorization/>}/>
                        <Route path='/additional' element={<AddInfo/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/profile' element={
                            // <RequireAuth>
                                <Profile/>
                            // </RequireAuth>
                        }/>
                        <Route path='/course' element={<Course />} />
                        <Route path='/lesson' element={<Lesson />} />
                    </Routes>
                    <Routes>
                    </Routes>
                </BrowserRouter>
            </div>
        </AuthProvider>
    )
        ;
}

export default App;
