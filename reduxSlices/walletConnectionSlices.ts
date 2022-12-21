/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';
import { ethers } from 'ethers';
import { RootState } from '../appStore/store';

declare let window: any;
export interface WalletStore {
    activeuser: ethers.providers.Web3Provider | null | undefined;
    address: string | null | undefined;
    isConnected: boolean;
    userID: string | number | null | undefined;
    walletbalance: number | null | undefined;
    network: string | null | undefined;
    chainId: number | null | undefined | string;
}
let ACTIVE_USER;
if (typeof window !== 'undefined') {
    ACTIVE_USER =
        localStorage.getItem('activeuser') !== null
            ? JSON.parse(localStorage.getItem('activeuser') || '{}')
            : null;
}
let ACTIVE_ADDRESS;
if (typeof window !== 'undefined') {
    ACTIVE_ADDRESS =
        localStorage.getItem('activeaddress') !== null
            ? JSON.parse(localStorage.getItem('activeaddress') || '{}')
            : null;
}
let IS_CONNECTED;
if (typeof window !== 'undefined') {
    IS_CONNECTED =
        localStorage.getItem('activeisconnected') !== null
            ? JSON.parse(localStorage.getItem('activeisconnected') || '{}')
            : false;
}
let CHAIN_ID;
if (typeof window !== 'undefined') {
    CHAIN_ID =
        localStorage.getItem('activeachain') !== null
            ? JSON.parse(localStorage.getItem('activeachain') || '{}')
            : null;
}

const initialState: WalletStore = {
    activeuser: null,
    address: ACTIVE_ADDRESS,
    isConnected: false,
    walletbalance: null,
    network: null,
    chainId: null,
    userID: null,
};

export const walletConnectionSlice = createSlice({
    name: 'walletConnectionSlice',
    initialState,
    reducers: {
        SET_ADDRESS: (state, action) => {
            state.address = action.payload;
            localStorage.setItem(
                'activeaddress',
                JSON.stringify(action.payload)
            );
        },
        SETACTIVE_USER: (state, action) => {
            state.activeuser = action.payload;
        },
        SET_IsConnected: (state, action) => {
            state.isConnected = action.payload;
        },
        SET_WalletBalance: (state, action) => {
            state.walletbalance = action.payload;
        },
        SET_Network: (state, action) => {
            state.network = action.payload;
        },
        SET_ChainId: (state, action) => {
            state.chainId = action.payload;
        },
        SET_userID: (state, action) => {
            state.userID = action.payload;
        },
    },
});

export const selectWalletInstance = (state: RootState) => state.walletinstance;

export const {
    SET_ADDRESS,
    SETACTIVE_USER,
    SET_IsConnected,
    SET_WalletBalance,
    SET_Network,
    SET_ChainId,
    SET_userID,
} = walletConnectionSlice.actions;

export default walletConnectionSlice.reducer;
