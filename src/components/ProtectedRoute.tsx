import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsAuthenticated } from "features/auth/slice";

interface Props {
	isAuthProtected: boolean;
}

const ProtectedRoute: React.FC<Props> = (props) => {
	const { isAuthProtected, children } = props;
	const isAuthenticated = useSelector(selectIsAuthenticated);
	const location = useLocation();
	const from = (location.state as any)?.from?.pathname || "/";

	if (isAuthProtected) {
		return !isAuthenticated ? (
			<Navigate to='/login' state={{ from: location }} replace />
		) : (
			<>{children}</>
		);
	} else {
		return isAuthenticated ? <Navigate to={from} replace /> : <>{children}</>;
	}
};

export default ProtectedRoute;
