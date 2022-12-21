import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../appStore/store';
import User from '../models/user';

export interface UserStore {
    user: User | null;
}

const initialState: UserStore = {
    user: null,
};

export const userStore = createSlice({
    name: 'mainModal',
    initialState,
    reducers: {
        SET_USER: (state, action) => {
            state.user = action.payload;
        },
    },
});

// export const selectModal = (state: RootState) => state.mainModal;

export const { SET_USER } = userStore.actions;

export default userStore.reducer;
