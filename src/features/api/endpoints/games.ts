import { LocalStorage } from "utils/local-storage";
import { apiSlice } from "..";
import { GetGamesPayload, GetGamesResult } from "../types";

export const gamesEndpoints = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getGames: builder.query<GetGamesResult, GetGamesPayload>({
			query: (payload) => ({
				url: "/games/list",
				method: "POST",
				body: { ...payload, lang: LocalStorage.getLanguage() },
			}),
		}),
	}),
});

export const { useGetGamesQuery } = gamesEndpoints;
