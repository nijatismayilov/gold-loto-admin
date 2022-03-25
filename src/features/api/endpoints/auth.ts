import { LocalStorage } from "utils/local-storage";
import { apiSlice } from "..";
import { LoginPayload, LoginResult } from "../types";

export const authEndpoints = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<LoginResult, LoginPayload>({
			query: (payload) => ({
				url: "/login",
				method: "POST",
				body: { ...payload, lang: LocalStorage.getLanguage() },
			}),
		}),
	}),
});

export const { useLoginMutation } = authEndpoints;
