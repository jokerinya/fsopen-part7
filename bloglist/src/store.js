import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import blogReducer from './reducers/blogReducer';
import notificationReducer from './reducers/notificationReducer';

const reducer = configureStore({
    reducer: {
        blogs: blogReducer,
        notification: notificationReducer,
        user: authReducer,
    },
});

export default reducer;
