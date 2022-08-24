import { createSlice } from '@reduxjs/toolkit';
import blogsService from '../services/blogs';
import loginService from '../services/login';
import { setErrorNotification } from './notificationReducer';

const authSlice = createSlice({
    name: 'auth',
    initialState: null,
    reducers: {
        _setUser(state, action) {
            return action.payload;
        },
    },
});

export const { _setUser } = authSlice.actions;

export const initializeUser = () => {
    return async (dispatch) => {
        const userJSON = window.localStorage.getItem('loggedBlogappUser');
        if (userJSON) {
            const userObj = JSON.parse(userJSON);
            blogsService.setToken(userObj.token);
            dispatch(_setUser(userObj));
        }
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        window.localStorage.removeItem('loggedBlogappUser');
        dispatch(_setUser(null));
    };
};

export const loginUser = (userCredentials) => {
    return async (dispatch) => {
        try {
            const user = await loginService.login(userCredentials);
            blogsService.setToken(user.token);
            window.localStorage.setItem(
                'loggedBlogappUser',
                JSON.stringify(user)
            );
            dispatch(_setUser(user));
        } catch (exception) {
            console.log(exception);
            dispatch(setErrorNotification(exception.response.data.error));
        }
    };
};

export default authSlice.reducer;
