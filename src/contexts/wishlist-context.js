import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./auth-context";
import axios from "axios";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
	const [wishlistItems, setWishlistItems] = useState([]);
	const { user } = useAuthContext();
	const token = localStorage.getItem("token");

	useEffect(() => {
		if (user) setWishlistItems(user.wishlist);
		else setWishlistItems([]);
	}, [user]);

	const addToWishlist = async (product) => {
		const findIndex = wishlistItems?.findIndex((p) => p._id === product._id);
		if (findIndex === -1) {
			try {
				const response = await axios.post(
					"/api/user/wishlist",
					{ product },
					{ headers: { authorization: token } }
				);
				console.log(response);
				setWishlistItems(response.data.wishlist);
			} catch (err) {
				console.log(err);
			}
		}
	};

	const removeFromWishlist = async (product) => {
		const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
			headers: { authorization: token },
		});
		console.log(response);
		setWishlistItems(response.data.wishlist);
	};

	const clearWishlist = () => {
		setWishlistItems([]);
	};

	return (
		<WishlistContext.Provider
			value={{
				wishlistItems,
				setWishlistItems,
				addToWishlist,
				removeFromWishlist,
				clearWishlist,
			}}>
			{children}
		</WishlistContext.Provider>
	);
};

export { WishlistProvider, useWishlist };
