import { useNavigate } from "react-router-dom";
import { useCart, useWishlist } from "contexts";
import { useState } from "react";
import "./cartComp.css";

export const CartComp = ({ product }) => {
	const [productState, setProductState] = useState(product);
	const { updateCartQty, removeFromCart } = useCart();
	const { addToWishlist, wishlistItems } = useWishlist();

	const navigate = useNavigate();

	const inWishlist = wishlistItems
		? wishlistItems.findIndex((p) => p._id === product._id) === -1
			? false
			: true
		: false;

	const moveToWishlistHandler = (e) => {
		if (!inWishlist) {
			addToWishlist(product);
			e.target.innerText = "Go to Wishlist";
			e.target.style.backgroundColor = "palegreen";
			e.target.style.color = "black";
		} else {
			navigate("/wishlist");
		}
	};

	return (
		<div className='cart-comp'>
			<img src={productState.image} alt='img' />
			<div className='cart-desc'>
				<div className='prd-title' aria-hidden='true'>
					{productState.title}
				</div>
				<div className=' txt-strike-through txt-secondary'>
					{`Rs. ${499 + Number(productState.price)}`}
				</div>
				<div>Rs.{productState.price}</div>
				<button className='btn btn-prm' onClick={() => removeFromCart(product)}>
					Remove from Cart
				</button>
				<button
					className='btn btn-secc'
					onClick={moveToWishlistHandler}
					style={{
						backgroundColor: `${inWishlist ? "palegreen" : ""}`,
						color: `${inWishlist ? "black" : ""}`,
					}}>
					{inWishlist ? "Go to Wishlist" : "Move To Wishlist"}
				</button>
				<div className='cart-qty-con'>
					<label htmlFor='quantity'>Quantity:</label>
					<div name='quantity' id='quantity'>
						<div className='number'>
							<span
								className='minus'
								id='minus'
								onClick={(e) => {
									setProductState({
										...productState,
										cartQty:
											productState.cartQty === 1 ? 1 : productState.cartQty - 1,
									});
									updateCartQty(productState, productState.cartQty - 1);
								}}>
								-
							</span>
							<input
								type='text'
								value={productState.cartQty}
								onChange={(e) => {
									setProductState({
										...productState,
										cartQty: e.target.value,
									});
									updateCartQty(productState, e.target.value);
								}}></input>
							<span
								className='plus'
								id='plus'
								onClick={(e) => {
									setProductState({
										...productState,
										cartQty: productState.cartQty + 1,
									});
									updateCartQty(productState, productState.cartQty + 1);
								}}>
								+
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
