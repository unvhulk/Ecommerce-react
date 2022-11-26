import { useAddress, useAuthContext, useCart, useOrders } from "contexts";
import { OrderSummaryComp } from "components";
import { useNavigate } from "react-router-dom";
import "./OrderSummary.css";
import AddressListOrderSummary from "components/address/addressListOrderSummary";
import { useEffect, useState } from "react";

export function OrderSummary() {
	const { cartProducts } = useCart();
	const { address } = useAddress();
	const initialAddress = { _id: "", fullname: "", mobile: "" };
	const [selectedAddress, setSelectedAddress] = useState(initialAddress);
	const { user } = useAuthContext();
	const { placeOrder } = useOrders();

	let totalPrice = 0,
		totalQty = 0;

	const navigate = useNavigate();
	if (cartProducts?.length === 0) {
		navigate("/cart");
	}

	useEffect(() => {
		setSelectedAddress(address ? address[0] : null);
	}, [address]);

	const handleAddNewAddress = () => {
		navigate("/profile/address");
	};

	const initializeRazorpay = () => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = "https://checkout.razorpay.com/v1/checkout.js";

			script.onload = () => {
				console.log("Resolved");
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};

			document.body.appendChild(script);
		});
	};

	const makePayment = async () => {
		const res = await initializeRazorpay();

		if (!res) {
			alert("Razorpay SDK Failed to load");
			return;
		}

		const options = {
			key: process.env.REACT_APP_RAZORPAY_KEY_ID,
			name: "Xero E-commerce",
			description: "Game store",
			currency: "INR",
			amount:
				(totalPrice - 700 * cartProducts?.length + 49 * cartProducts?.length) *
				100,
			handler: function (response) {
				if (response && response.razorpay_payment_id) {
					// Place order
					const order = {
						razorpay_payment_id: response.razorpay_payment_id,
						products: [...cartProducts],
						amount:
							(totalPrice -
								700 * cartProducts?.length +
								49 * cartProducts?.length) *
							100,
						currency: "INR",
					};
					placeOrder(order);
				}
			},
			prefill: {
				name: selectedAddress.fullname,
				email: user.email,
				contact: selectedAddress.mobile,
				method: "netbanking",
			},
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};

	return (
		<main className='order-container'>
			<h1 className='order-summary-header'>Order Summary</h1>
			<div className='cart-grid order'>
				<div className='order-list'>
					{cartProducts?.map((product) => {
						totalPrice += product.price * product.cartQty;
						totalQty += product.cartQty;
						return <OrderSummaryComp product={product} key={product._id} />;
					})}
				</div>
				<div className='address-container'>
					<h2 className='address-header'>Delivery Address</h2>
					<div className='address-manager'>
						<button className='add-address' onClick={handleAddNewAddress}>
							Add New Address
						</button>
						<div className='address-list'>
							{address?.map((add) => (
								<AddressListOrderSummary
									key={add.id}
									id={add._id}
									address={add}
									selected={selectedAddress._id === add._id}
									setSelectedAddress={setSelectedAddress}
								/>
							))}
						</div>
					</div>
				</div>
				<div className='checkout-container order'>
					<div className='checkout order'>
						<h3 className='checkout-title'>Checkout</h3>
						<hr />
						<div className='checkout-des'>
							<p>Quantity </p>
							<p className='checkout-des-price'>{totalQty}</p>
						</div>
						<div className='checkout-des'>
							<p>Price </p>
							<p className='checkout-des-price'>Rs.{totalPrice}</p>
						</div>
						<div className='checkout-des'>
							<p>Discount</p>
							<p className='checkout-des-price'>
								-Rs.{700 * cartProducts?.length}
							</p>
						</div>
						<div className='checkout-des'>
							<p>Delivery Charges</p>
							<p className='checkout-des-price'>
								Rs.{49 * cartProducts?.length}
							</p>
						</div>
						<hr />
						<div className='checkout-des'>
							<h3>TOTAL</h3>
							<h3 className='checkout-des-price'>
								Rs.
								{totalPrice -
									700 * cartProducts?.length +
									49 * cartProducts?.length}
							</h3>
						</div>
						<hr />
						<p>You will save Rs.{749 * cartProducts?.length} on this order</p>
						<button
							className={`payment-btn ${
								address?.length === 0 && "btn-disabled"
							}`}
							onClick={makePayment}>
							PROCEED TO PAYMENT
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
