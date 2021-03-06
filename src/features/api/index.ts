import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LocalStorage } from "utils/local-storage";

export const apiSlice = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://185.164.32.199/gold/api/admin",
		prepareHeaders: (headers) => {
			const user = LocalStorage.getUser();

			if (user) {
				headers.set("Authorization", `Bearer ${user.token}`);
			}

			return headers;
		},
	}),
	tagTypes: ["Auth"],
	endpoints: (builder) => ({}),
});
