import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import blogReducer from './reducers/blogReducer';
import notificationReducer from './reducers/notificationReducer';
import usersReducer from './reducers/usersReducer';

const reducer = configureStore({
    reducer: {
        blogs: blogReducer,
        notification: notificationReducer,
        user: authReducer,
        allUsers: usersReducer,
    },
});

export default reducer;
