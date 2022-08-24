import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initializeUser } from './reducers/authReducer';

import User from './components/User';
import LoginForm from './components/LoginForm';
import BlogList from './components/BlogList';
import Notification from './components/Notification';

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(initializeUser());
    }, []);

    return (
        <>
            {/* if user is not defined */}
            {user === null ? (
                <div>
                    <h2>log in to application</h2>
                    <Notification />
                    <LoginForm />
                </div>
            ) : (
                <>
                    <h2>blogs</h2>
                    <User />
                    <BlogList />
                </>
            )}
        </>
    );
};

export default App;
