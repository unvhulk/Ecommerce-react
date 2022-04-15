import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
	Home,
	Login,
	Profile,
	Signup,
	Products,
	Cart,
	Wishlist,
} from "./screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/products" element={<Products />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/wishlist" element={<Wishlist />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
