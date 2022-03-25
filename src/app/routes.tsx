import { Role } from "types/user";
import Login from "pages/Login";
import Games from "pages/Games";
import Users from "pages/Users";
import Index from "pages/Index";

export type Route = {
	path: string;
	element: React.ReactElement;
	isAuthProtected: boolean;
};

export const routes: Route[] = [
	{
		path: "/login",
		element: <Login />,
		isAuthProtected: false,
	},
	{
		path: "/",
		element: <Index />,
		isAuthProtected: true,
	},
	{
		path: `/${Role.games}`,
		element: <Games />,
		isAuthProtected: true,
	},
	{
		path: `/${Role.users}`,
		element: <Users />,
		isAuthProtected: true,
	},
];
