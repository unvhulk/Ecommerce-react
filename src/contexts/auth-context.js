import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [token, setToken] = useState({});
	const setUserDetails = (user) => {
		setUser(user);
	};
	const navigate = useNavigate();
	const location = useLocation();
	const to = location.state?.from?.pathname ?? "/";
	const [error, setError] = useState("noerror");
	const seterrorDetails = (error) => {
		setError(error);
		console.log(error);
	};
	const SignupHandler = async (newUser) => {
		try {
			const response = await axios.post(`/api/auth/signup`, newUser);
			localStorage.setItem("token", response.data.encodedToken);
			localStorage.setItem("user", response.data.user);
			setUserDetails(response.data.createdUser);
			setToken(response.data.encodedToken);
			navigate(`${to}`, {
				state: location,
			});
		} catch (err) {
			console.log(err.response?.data);
			seterrorDetails(err.response?.data);
		}
	};
	const LoginHandler = async (authUser) => {
		try {
			const response = await axios.post(`/api/auth/login`, authUser);
			if (response.status === 200) {
				localStorage.setItem("token", response.data.encodedToken);
				localStorage.setItem("user", response.data.foundUser);
				setUserDetails(response.data.foundUser);
				setToken(response.data.encodedToken);
				navigate(`${to}`, {
					state: location,
				});
			}
		} catch (err) {
			seterrorDetails(err.response.data);
			console.log(err);
		}
	};
	const LogoutHandler = () => {
		navigate("/login");
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		setToken({});
		setUser({});
	};
	return (
		<AuthContext.Provider
			value={{
				LogoutHandler,
				SignupHandler,
				LoginHandler,
				user,
				setUser,
				token,
				error,
				setError,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuthContext = () => useContext(AuthContext);
export { useAuthContext, AuthProvider };
