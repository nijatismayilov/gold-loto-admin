import {
	MdGames,
	MdGroup,
	MdCampaign,
	MdManageAccounts,
	MdCelebration,
	MdAccountBalanceWallet,
	MdAccountBalance,
	MdCardGiftcard,
} from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { HiDocumentReport } from "react-icons/hi";
import { Role } from "types/user";
import { MENUS } from "locales";
import { Language } from "features/localization/slice";

export type Menu = {
	path: string;
	role: Role;
	label: string;
	icon: React.ReactElement;
};

export type GetMenus = (lang: Language) => Menu[];

export const getMenus: GetMenus = (lang) => {
	const texts = MENUS[lang];

	return [
		{
			path: `/${Role.games}`,
			role: Role.games,
			label: texts[Role.games],
			icon: <MdGames />,
		},
		{
			path: `/${Role.users}`,
			role: Role.users,
			label: texts[Role.users],
			icon: <MdGroup />,
		},
		{
			path: `/${Role.campaigns}`,
			role: Role.campaigns,
			label: texts[Role.campaigns],
			icon: <MdCampaign />,
		},
		{
			path: `/${Role.managers}`,
			role: Role.managers,
			label: texts[Role.managers],
			icon: <MdManageAccounts />,
		},
		{
			path: `/${Role.birthdays}`,
			role: Role.birthdays,
			label: texts[Role.birthdays],
			icon: <MdCelebration />,
		},
		{
			path: `/${Role.deposits}`,
			role: Role.deposits,
			label: texts[Role.deposits],
			icon: <MdAccountBalanceWallet />,
		},
		{
			path: `/${Role.withdrawal}`,
			role: Role.withdrawal,
			label: texts[Role.withdrawal],
			icon: <MdAccountBalance />,
		},
		{
			path: `/${Role.bonuses}`,
			role: Role.bonuses,
			label: texts[Role.bonuses],
			icon: <MdCardGiftcard />,
		},
		{
			path: `/${Role.tickets}`,
			role: Role.tickets,
			label: texts[Role.tickets],
			icon: <IoTicket />,
		},
		{
			path: `/${Role.reports}`,
			role: Role.reports,
			label: texts[Role.reports],
			icon: <HiDocumentReport />,
		},
	];
};
