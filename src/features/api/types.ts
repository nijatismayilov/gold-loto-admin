import { Game } from "types/game";
import { User } from "types/user";

export type BaseResult = {
	message: string | null;
	result: boolean;
};

/* Payload Types */
export type LoginPayload = {
	username: string;
	password: string;
};

export type GetGamesPayload = {
	start: number;
	end: number;
};

/* Result Types */
export type LoginResult = BaseResult & {
	data: User;
};

export type GetGamesResult = BaseResult & {
	data: Game[];
	total: number;
};
