import { CartComp } from "components";
import { useCart } from "contexts";

export const Cart = () => {
	const { cartProducts } = useCart();
	let totalPrice = 0,
		totalQty = 0;
	return (
		<>
			<div className='main-container cart-height'>
				<div className='component-display-container cart-items vertical-cards'>
					<div className='cart-header'>
						<h1 className='fa' aria-hidden='true'>
							My Cart
							{cartProducts?.length ? `(${cartProducts?.length})` : " "}
						</h1>
					</div>
					{cartProducts?.length === 0 || cartProducts?.length === undefined ? (
						<div>
							<h1 className='fa'>Your cart is empty.</h1>
						</div>
					) : (
						<div className='cart-grid'>
							<div>
								{cartProducts?.map((product) => {
									totalPrice += product.price * product.cartQty;
									totalQty += product.cartQty;
									return <CartComp product={product} key={product._id} />;
								})}
							</div>
							<div className='checkout-container'>
								<div className='checkout'>
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
									<p>
										You will save Rs.{749 * cartProducts?.length} on this order
									</p>
									<button className='checkout-btn'>PLACE ORDER</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
