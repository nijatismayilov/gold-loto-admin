export enum Role {
	games = "games",
	campaigns = "campaigns",
	users = "users",
	managers = "managers",
	birthdays = "birthdays",
	deposits = "deposits",
	withdrawal = "withdrawal",
	bonuses = "bonuses",
	tickets = "tickets",
	reports = "reports",
}

export type User = {
	full_name: string;
	token: string;
	roles: Role[];
};
