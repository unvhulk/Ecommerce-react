import { useAuthContext } from "contexts";
import { Navigate, Outlet, useLocation } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
	const { user } = useAuthContext();
	const location = useLocation();
	return Object.keys(user).length === 0 ? (
		<Navigate to='/login' state={{ from: location }} />
	) : (
		<>
			<Outlet />
		</>
	);
};
