import { Box } from "@mui/material";
import Sidebar from "components/Sidebar";

interface Props {
	title?: string | React.ReactNode;
}

const MainLayout: React.FC<Props> = (props) => {
	const { children, title } = props;

	return (
		<Box className='flex'>
			<Sidebar />
			<Box className='flex flex-col w-full'>
				{title && (
					<Box className='px-5 py-3 bg-primary text-white'>
						<h1 className='text-2xl font-bold'>{title}</h1>
					</Box>
				)}
				<Box className='p-5'>{children}</Box>
			</Box>
		</Box>
	);
};

export default MainLayout;
