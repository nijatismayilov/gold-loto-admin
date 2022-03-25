import { Language } from "features/localization/slice";
import { User } from "types/user";

export interface ILocalStorage {
	getUser(): User | null;
	setUser(user: User): void;
	removeUser(): void;

	getLanguage(): Language | null;
	setLanguage(language: Language): void;
	removeLanguage(): void;

	getSidebar(): boolean | null;
	setSidebar(sidebar: boolean): void;
	removeSidebar(): void;
}

export const LocalStorage: ILocalStorage = {
	getUser: () => {
		const user = localStorage.getItem("user");

		return user ? JSON.parse(user || "{}") : null;
	},
	setUser: (user: User) => localStorage.setItem("user", JSON.stringify(user)),
	removeUser: () => localStorage.removeItem("user"),

	getLanguage: () => localStorage.getItem("language") as Language,
	setLanguage: (language: Language) => localStorage.setItem("language", language),
	removeLanguage: () => localStorage.removeItem("language"),

	getSidebar: () => localStorage.getItem("sidebar") === "true",
	setSidebar: (sidebar: boolean) => localStorage.setItem("sidebar", sidebar.toString()),
	removeSidebar: () => localStorage.removeItem("sidebar"),
};
