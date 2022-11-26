import { useAuthContext } from "contexts";
import { Outlet, useNavigate } from "react-router-dom";
import "./profile.css";

export const Profile = ({ children }) => {
	const { user } = useAuthContext();
	const navigate = useNavigate();
	const { LogoutHandler } = useAuthContext();
	return (
		<>
			<main className='component-display-container '>
				<div className='profile-container'>
					<div className='profile-top'>
						<div className='profile-left'>
							<h3>{user.firstName}'s Profile</h3>
							<div
								className='fa fa-sign-out signout-icon'
								onClick={LogoutHandler}></div>
						</div>
						<div className='profile-right'>
							<div
								className='profile-options'
								onClick={() => navigate("./account")}>
								Account
							</div>
							<div
								className='profile-options'
								onClick={() => navigate("./address")}>
								Address
							</div>
							<div
								className='profile-options'
								onClick={() => navigate("./orders")}>
								Orders
							</div>
						</div>
					</div>
					<Outlet />
				</div>
			</main>
		</>
	);
};
