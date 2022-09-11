import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';

import { initializeUser } from './reducers/authReducer';

import LoginForm from './components/LoginForm';
import BlogList from './components/BlogList';
import Notification from './components/Notification';
import { initializeAllUsers } from './reducers/usersReducer';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import Blog from './components/Blog';
import Navigation from './components/Navigation';

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
                    <Navigation />
                    <h2>Blogs</h2>
                    <Routes>
                        <Route path='/' element={<BlogList />} />
                        <Route path='/users/:id' element={<UserDetail />} />
                        <Route path='/users' element={<UserList />} />
                        <Route path='/blogs/:id' element={<Blog />} />
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
