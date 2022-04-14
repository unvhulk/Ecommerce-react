export const CartComp = () => {
	return (
		<div className="component-display-container cart-items vertical-cards">
			<div className="cart-header">
				<h1 className="fa" aria-hidden="true">
					My Cart
				</h1>
			</div>
			<div className="flex-items">
				<div className="cart-comp">
					<img src="https://xero-ecomm.netlify.app/assets/cp1.jpg" alt="img" />
					<div className="cart-des">
						<h2 className="prd-title fa" aria-hidden="true">
							{" "}
							God Of War{" "}
						</h2>
						<p className="card-item-cost">Rs.3299</p>
						<p className="card-item-cost txt-strike-through txt-secondary">
							Rs.3999
						</p>
						<button className="btn btn-prm">Remove from Cart</button>
						<button className="btn btn-secc">Move To Wishlist</button>
						<div className="cart-qty-con">
							<label htmlFor="quantity">Quantity:</label>
							<select name="quantity" id="quantity">
								<option value={1} selected>
									1
								</option>
								<option value={2}>2</option>
								<option value={3}>3</option>
								<option value={4}>4</option>
								<option value={5}>5</option>
							</select>
							<button className="trash-btn">
								<i className="fa fa-trash-o" aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>
				<div className="checkout-container">
					<div className="checkout">
						<h3 className="checkout-title">Checkout</h3>
						<hr />
						<div className="checkout-des">
							<p>Price (1 item)</p>
							<p className="checkout-des-price">$3999</p>
						</div>
						<div className="checkout-des">
							<p>Discount</p>
							<p className="checkout-des-price">-$700</p>
						</div>
						<div className="checkout-des">
							<p>Delivery Charges</p>
							<p className="checkout-des-price">$49</p>
						</div>
						<hr />
						<div className="checkout-des">
							<h3>TOTAL</h3>
							<h3 className="checkout-des-price">$3250</h3>
						</div>
						<hr />
						<p>You will save $749 on this order</p>
						<button className="checkout-btn">PLACE ORDER</button>
					</div>
				</div>
			</div>
		</div>
	);
};
