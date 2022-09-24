import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./auth-context";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cartProducts, setCartProducts] = useState([]);
	const { user, token } = useAuthContext();

	useEffect(() => {
		if (user) setCartProducts(user.cart);
		else setCartProducts([]);
	}, [user]);

	const addToCart = async (product) => {
		try {
			const findIndex = cartProducts.findIndex((p) => p._id === product._id);
			if (findIndex === -1) {
				const response = await axios.post(
					"/api/user/cart",
					{ product },
					{
						headers: {
							authorization: token,
						},
					}
				);
				setCartProducts(response.data.cart);
			}
		} catch (err) {
			console.log(err.response.data);
		}
	};

	const updateCartQty = async (product, qty) => {
		try {
			const response = await axios.post(
				`/api/user/cart/${product._id}`,
				{ quantity: qty },
				{ headers: { authorization: token } }
			);
			setCartProducts(response.data.cart);
		} catch (err) {
			console.log(err.response.data);
		}
	};

	const removeFromCart = async (product) => {
		try {
			const response = await axios.delete(`/api/user/cart/${product._id}`, {
				headers: { authorization: token },
			});
			setCartProducts(response.data.cart);
		} catch (err) {
			console.log(err.response.data);
		}
	};

	const clearCart = () => {
		setCartProducts([]);
	};

	return (
		<CartContext.Provider
			value={{
				cartProducts,
				addToCart,
				updateCartQty,
				removeFromCart,
				clearCart,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export { CartProvider, useCart };
