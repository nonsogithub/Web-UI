/**
 * /* eslint-disable import/no-cycle
 *
 * @format
 */

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import ModalReducer from "../reduxSlices/allModalSlice";
import UserReducer from "../reduxSlices/userSlice";
import WalletReducer from "../reduxSlices/walletConnectionSlices";
import { userServices } from "../services/userServices";
// import { userServices } from '../services/userServices';
// import { assetServices } from '../services/propertiesServices';

export const store = configureStore({
	reducer: {
		mainModal: ModalReducer,
		user: UserReducer,
		walletinstance: WalletReducer,
		[userServices.reducerPath]: userServices.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat([userServices.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
