import { createSlice } from '@reduxjs/toolkit';

const initialState = { type: null, content: null };

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        _addNotificationMessage(state, action) {
            return action.payload;
        },
        _deleteNotificationMessage(state, action) {
            return { type: null, content: null };
        },
    },
});

export const { _addNotificationMessage, _deleteNotificationMessage } =
    notificationSlice.actions;

// async func works with redux-thunk package
let timeOutId = 0;

const setNotification = (dispatch, type, content, second) => {
    dispatch(_addNotificationMessage({ type, content }));
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
        dispatch(_deleteNotificationMessage());
    }, second * 1000);
};

export const setSuccessNotification = (content, second = 3) => {
    return async (dispatch) => {
        setNotification(dispatch, 'success', content, second);
    };
};

export const setErrorNotification = (content, second = 3) => {
    return async (dispatch) => {
        setNotification(dispatch, 'error', content, second);
    };
};

export default notificationSlice.reducer;
