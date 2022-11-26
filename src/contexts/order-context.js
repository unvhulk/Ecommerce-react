import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext, useCart } from "contexts";
import { useNavigate } from "react-router-dom";

const OrdersContext = createContext();

const useOrders = () => useContext(OrdersContext);

function OrdersProvider({ children }) {
	const [orders, setOrders] = useState([]);
	const [processingOrders, setProcessingOrders] = useState(null);
	const { user, token } = useAuthContext();
	const { clearCart } = useCart();
	const navigate = useNavigate();

	useEffect(() => {
		if (user && user.orders) {
			setOrders(user.orders);
		} else {
			setOrders([]);
		}
	}, [user]);

	const placeOrder = async (order) => {
		try {
			const response = await axios.request({
				method: "post",
				url: "/api/user/order",
				headers: { authorization: token },
				data: { ...order },
			});
			setOrders(response.data.orders);
			clearCart();
			navigate("/profile/orders");
			setProcessingOrders(false);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<OrdersContext.Provider value={{ orders, processingOrders, placeOrder }}>
			{children}
		</OrdersContext.Provider>
	);
}

export { OrdersProvider, useOrders };
