import {
	Home,
	Login,
	Profile,
	Signup,
	Products,
	Cart,
	Wishlist,
	ErrorPage,
	OrderSummary,
} from "./screens";
import { Routes, Route } from "react-router-dom";
import {
	PrivateRoute,
	Skeleton,
	Account,
	AddressManagement,
	Orders,
} from "components";

export const App = () => {
	return (
		<Routes>
			<Route element={<Skeleton />}>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/products' element={<Products />} />
				<Route element={<PrivateRoute />}>
					<Route path='/profile' element={<Profile />}>
						<Route path='account' element={<Account />} />
						<Route path='address' element={<AddressManagement />} />
						<Route path='orders' element={<Orders />} />
					</Route>
					<Route path='/wishlist' element={<Wishlist />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/cart/order-summary' element={<OrderSummary />} />
				</Route>
				<Route path='*' element={<ErrorPage />} />
			</Route>
		</Routes>
	);
};
// </Skeleton>;
