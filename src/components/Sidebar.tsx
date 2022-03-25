import {
	Drawer,
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemText,
	List,
	Divider,
} from "@mui/material";
import { MdChevronLeft, MdMenu, MdLogout } from "react-icons/md";
import { useState, useEffect } from "react";
import { drawerStyles } from "component-styles/drawer";
import { getMenus } from "app/menus";
import { useSelector, useDispatch } from "react-redux";
import { selectLanguage } from "features/localization/slice";
import { Link } from "react-router-dom";
import { LocalStorage } from "utils/local-storage";
import { MENUS } from "locales";
import { flushAuth } from "features/auth/slice";
import { selectUserRolesMap } from "features/auth/slice";

interface Props {}

const Sidebar: React.FC<Props> = () => {
	const [isOpen, setIsOpen] = useState(LocalStorage.getSidebar() || false);
	const language = useSelector(selectLanguage);
	const userRolesMap = useSelector(selectUserRolesMap);
	const dispatch = useDispatch();
	const menus = getMenus(language);
	const TEXTS = MENUS[language];

	useEffect(() => {
		LocalStorage.setSidebar(isOpen);
	}, [isOpen]);

	return (
		<Drawer sx={drawerStyles(isOpen)} variant='permanent' open={isOpen}>
			<div className='flex items-center justify-end mr-4'>
				<IconButton onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}>
					{isOpen ? <MdChevronLeft /> : <MdMenu />}
				</IconButton>
			</div>

			<Divider />

			<List sx={{ fontSize: "24px" }}>
				{menus.map(
					(menu) =>
						userRolesMap.get(menu.role) && (
							<Link to={menu.path} key={menu.path}>
								<ListItem button>
									<ListItemIcon sx={{ marginLeft: "8px" }}>{menu.icon}</ListItemIcon>
									<ListItemText primary={menu.label} />
								</ListItem>
							</Link>
						)
				)}

				<Divider />

				<div className='mt-auto'>
					<ListItem button onClick={() => dispatch(flushAuth())}>
						<ListItemIcon sx={{ marginLeft: "8px" }}>
							<MdLogout />
						</ListItemIcon>
						<ListItemText primary={TEXTS.logout} />
					</ListItem>
				</div>
			</List>
		</Drawer>
	);
};

export default Sidebar;
