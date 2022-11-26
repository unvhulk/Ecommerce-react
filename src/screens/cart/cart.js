import { CartComp } from "components";
import { useCart } from "contexts";
import { Link, useNavigate } from "react-router-dom";

export const Cart = ({ children }) => {
	const { cartProducts } = useCart();
	const navigate = useNavigate();
	let totalPrice = 0,
		totalQty = 0;
	return (
		<>
			<main className='cart-container'>
				<div className='cart-header'>
					<h1>
						MY CART
						{cartProducts?.length ? `(${cartProducts?.length})` : " "}
					</h1>
				</div>
				{cartProducts?.length === 0 || cartProducts?.length === undefined ? (
					<div className='empty-cart'>
						<h1>
							Your cart is empty. Check out our{" "}
							<span onClick={() => navigate("/products")}>products</span>.
						</h1>
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
								<Link to='/cart/order-summary'>
									<button className='checkout-btn'>PLACE ORDER</button>
								</Link>
							</div>
						</div>
					</div>
				)}
			</main>
		</>
	);
};
