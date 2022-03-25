import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "components/ProtectedRoute";
import { routes } from "app/routes";
import { useDispatch } from "react-redux";
import { LocalStorage } from "utils/local-storage";
import { authenticate } from "features/auth/slice";

const App: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const user = LocalStorage.getUser();

		if (user) {
			dispatch(authenticate(user));
		}
	}, [dispatch]);

	return (
		<>
			<Routes>
				{routes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={
							<ProtectedRoute isAuthProtected={route.isAuthProtected}>
								{route.element}
							</ProtectedRoute>
						}
					/>
				))}

				<Route path='*' element={<Navigate to={`/`} replace />} />
			</Routes>

			<Toaster />
		</>
	);
};

export default App;
