import { Role } from "types/user";

export type LoginFormLocale = {
	formTitle: string;
	usernameLabel: string;
	usernamePlaceholder: string;
	usernameError: string;
	passwordLabel: string;
	passwordPlaceholder: string;
	passwordError: string;
	submitButton: string;
};

export type MenusLocale = {
	[Role.games]: string;
	[Role.campaigns]: string;
	[Role.users]: string;
	[Role.managers]: string;
	[Role.birthdays]: string;
	[Role.deposits]: string;
	[Role.withdrawal]: string;
	[Role.bonuses]: string;
	[Role.tickets]: string;
	[Role.reports]: string;
	logout: string;
};

export type GamesPage = {
	title: string;
};
