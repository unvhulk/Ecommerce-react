import { OrderSummaryComp } from "components";
import { useOrders } from "contexts";
import { useNavigate } from "react-router-dom";
import "./orders.css";

export const Orders = () => {
	const { orders } = useOrders();
	const navigate = useNavigate();

	return (
		<div className='orders-container '>
			{orders.length === 0 && (
				<div className='empty-state-div'>
					No orders yet. Check out our{" "}
					<span onClick={() => navigate("/products")}>products</span>.
				</div>
			)}
			{orders.map((order) => (
				<div
					className='order-details profile-content'
					key={order.razorpay_payment_id}>
					<div className='order-header'>
						<div className='order-id'>
							Order ID: {order.razorpay_payment_id}
						</div>
						<div className='order-amt'>Amount: {order.amount}</div>
					</div>
					<div className='order-list orders'>
						{order.products.map((product) => {
							return <OrderSummaryComp product={product} key={product._id} />;
						})}
					</div>
				</div>
			))}
		</div>
	);
};
