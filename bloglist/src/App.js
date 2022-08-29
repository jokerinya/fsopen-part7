import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';

import { initializeUser } from './reducers/authReducer';

import Auth from './components/Auth';
import LoginForm from './components/LoginForm';
import BlogList from './components/BlogList';
import Notification from './components/Notification';
import { initializeAllUsers } from './reducers/usersReducer';
import UserList from './components/UserList';

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(initializeUser());
        dispatch(initializeAllUsers());
    }, []);

    return (
        <>
            {/* if user defined */}
            {user ? (
                <>
                    <h2>blogs</h2>
                    <Auth />
                    <Routes>
                        <Route path='/' element={<BlogList />} />
                        <Route path='/users' element={<UserList />} />
                    </Routes>
                </>
            ) : (
                <div>
                    <h2>log in to application</h2>
                    <Notification />
                    <LoginForm />
                </div>
            )}
        </>
    );
};

export default App;
