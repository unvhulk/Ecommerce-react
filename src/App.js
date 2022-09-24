import {
	Home,
	Login,
	Profile,
	Signup,
	Products,
	Cart,
	Wishlist,
	ErrorPage,
} from "./screens";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute, Skeleton } from "components";
import Mockman from "mockman-js";

export const App = () => {
	return (
		<Routes>
			<Route element={<Skeleton />}>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/products' element={<Products />} />
				<Route element={<PrivateRoute />}>
					<Route path='/profile' element={<Profile />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/wishlist' element={<Wishlist />} />
				</Route>
				<Route path='/mock' element={<Mockman />} />
				<Route path='*' element={<ErrorPage />} />
			</Route>
		</Routes>
	);
};
// </Skeleton>;
