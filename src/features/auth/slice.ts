import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { authEndpoints } from "features/api/endpoints/auth";
import { User } from "types/user";
import { LocalStorage } from "utils/local-storage";

import posts from "features/posts.json";

export type AuthState = {
	isAuthenticated: boolean;
	user?: User;
	posts: any;
};

const initialState: AuthState = {
	isAuthenticated: false,
	user: undefined,
	posts: posts,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authenticate: (state, action: PayloadAction<User>) => {
			state.isAuthenticated = true;
			state.user = action.payload;

			LocalStorage.setUser(action.payload);
		},
		flushAuth: (state) => {
			state.isAuthenticated = false;
			state.user = undefined;

			LocalStorage.removeUser();
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(authEndpoints.endpoints.login.matchFulfilled, (state, action) => {
			const { data, result } = action.payload;

			if (result) {
				state.isAuthenticated = true;
				state.user = data;

				LocalStorage.setUser(data);
			}
		});
	},
});

export const { authenticate, flushAuth } = authSlice.actions;

const selectAuth = (state: RootState) => state.auth;

export const selectIsAuthenticated = createSelector([selectAuth], (auth) => auth.isAuthenticated);

export const selectUser = createSelector([selectAuth], (auth) => auth.user);

export const selectUserRoles = createSelector([selectUser], (user) => user?.roles || []);

export const selectUserRolesMap = createSelector([selectUserRoles], (roles) => {
	const map = new Map<string, boolean>();

	roles.forEach((role) => map.set(role, true));

	return map;
});
