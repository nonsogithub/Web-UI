import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../appStore/store';

export interface ModalState {
    modalIsOpen: boolean;
    modalType: string;
    screenSize: number;
}

const initialState: ModalState = {
    modalIsOpen: true,
    modalType: '',
    screenSize: 1,
};

export const allModalSlice = createSlice({
    name: 'mainModal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.modalIsOpen = true;
            state.modalType = action.payload;
        },
        closeModal: state => {
            state.modalIsOpen = false;
            state.modalType = '';
        },
        setScreenSize: (state, action) => {
            state.screenSize = action.payload;
        },
    },
});

export const selectModal = (state: RootState) => state.mainModal;

export const { openModal, closeModal, setScreenSize } = allModalSlice.actions;

export default allModalSlice.reducer;
