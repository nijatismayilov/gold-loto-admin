import { Language } from "features/localization/slice";
import { Role } from "types/user";
import { GamesPage, LoginFormLocale, MenusLocale } from "./types";

export type LocaleMap<Locale> = {
	[lang in Language]: Locale;
};

export const LOGIN_FORM: LocaleMap<LoginFormLocale> = {
	az: {
		formTitle: "Giriş",
		usernameLabel: "İstifadəçi adı",
		usernamePlaceholder: "E-poçt və ya nömrə",
		usernameError: "İstifadəçi adı boş ola bilməz",
		passwordLabel: "Şifrə",
		passwordPlaceholder: "Şifrənizi daxil edin",
		passwordError: "Şifrə boş ola bilməz",
		submitButton: "Daxil ol",
	},
	en: {
		formTitle: "Sign In",
		usernameLabel: "Username",
		usernamePlaceholder: "Email or phone number",
		usernameError: "Username can't be empty",
		passwordLabel: "Password",
		passwordPlaceholder: "Enter your password",
		passwordError: "Password can't be empty",
		submitButton: "Sign In",
	},
	ru: {
		formTitle: "Вход",
		usernameLabel: "Имя пользователя",
		usernamePlaceholder: "Электронная почта или номер телефона",
		usernameError: "Имя пользователя не может быть пустым",
		passwordLabel: "Пароль",
		passwordPlaceholder: "Введите пароль",
		passwordError: "Пароль не может быть пустым",
		submitButton: "Войти",
	},
};

export const MENUS: LocaleMap<MenusLocale> = {
	az: {
		[Role.games]: "Oyunlar",
		[Role.campaigns]: "Kampaniyalar",
		[Role.users]: "İstifadəçilər",
		[Role.managers]: "İdarəçilər",
		[Role.birthdays]: "Doğum günü",
		[Role.deposits]: "Depozitlər",
		[Role.withdrawal]: "Çıxarışlar",
		[Role.bonuses]: "Bonuslar",
		[Role.tickets]: "Biletlər",
		[Role.reports]: "Hesabatlar",
		logout: "Çıxış",
	},
	en: {
		[Role.games]: "Games",
		[Role.campaigns]: "Campaigns",
		[Role.users]: "Users",
		[Role.managers]: "Managers",
		[Role.birthdays]: "Birthdays",
		[Role.deposits]: "Deposits",
		[Role.withdrawal]: "Withdrawal",
		[Role.bonuses]: "Bonuses",
		[Role.tickets]: "Tickets",
		[Role.reports]: "Reports",
		logout: "Logout",
	},
	ru: {
		[Role.games]: "Игры",
		[Role.campaigns]: "Кампании",
		[Role.users]: "Пользователи",
		[Role.managers]: "Менеджеры",
		[Role.birthdays]: "День рождения",
		[Role.deposits]: "Депозиты",
		[Role.withdrawal]: "Вывод",
		[Role.bonuses]: "Бонусы",
		[Role.tickets]: "Билеты",
		[Role.reports]: "Отчеты",
		logout: "Выход",
	},
};

export const GAMES_PAGE: LocaleMap<GamesPage> = {
	az: {
		title: "Oyunlar",
	},
	en: {
		title: "Games",
	},
	ru: {
		title: "Игры",
	},
};
