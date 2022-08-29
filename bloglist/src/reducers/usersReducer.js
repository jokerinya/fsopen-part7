import { createSlice } from '@reduxjs/toolkit';
import usersService from '../services/users';

const usersSlice = createSlice({
    name: 'allUsers',
    initialState: [],
    reducers: {
        _setUsers(state, action) {
            return action.payload;
        },
    },
});

export const { _setUsers } = usersSlice.actions;

export const initializeAllUsers = () => {
    return async (dispatch) => {
        try {
            const allUsers = await usersService.getAll();
            dispatch(_setUsers(allUsers));
        } catch (exception) {
            console.log(exception);
        }
    };
};

export default usersSlice.reducer;
