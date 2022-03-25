import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "features/auth/slice";
import { localizationSlice } from "features/localization/slice";
import { apiSlice } from "features/api";

export const store = configureStore({
	reducer: {
		[authSlice.name]: authSlice.reducer,
		[localizationSlice.name]: localizationSlice.reducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), apiSlice.middleware],
});

export type RootState = ReturnType<typeof store.getState>;
