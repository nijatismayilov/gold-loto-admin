import MainLayout from "components/MainLayout";
import { selectLanguage } from "features/localization/slice";
import { useSelector } from "react-redux";
import { GAMES_PAGE } from "locales";
import { useGetGamesQuery } from "features/api/endpoints/games";

const Games: React.FC = () => {
	const language = useSelector(selectLanguage);
	const TEXTS = GAMES_PAGE[language];
	const { data: gamesRes, isLoading: isGamesLoading } = useGetGamesQuery({ start: 0, end: 10 });

	return (
		<MainLayout title={TEXTS.title}>
			{isGamesLoading ? (
				<div>Loading...</div>
			) : (
				<pre>{JSON.stringify(gamesRes?.data, null, 2)}</pre>
			)}
		</MainLayout>
	);
};

export default Games;
