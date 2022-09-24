import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext, useCart, useWishlist } from "contexts";
import { useState } from "react";

export const ProductCard = ({ product }) => {
	const { addToCart, cartProducts } = useCart();
	const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist();
	const { user } = useAuthContext();
	const navigate = useNavigate();
	const location = useLocation();

	const inCart = cartProducts
		? cartProducts.findIndex((p) => p._id === product?._id) === -1
			? false
			: true
		: false;

	const [inWishlist, setInWishlist] = useState(() =>
		wishlistItems
			? wishlistItems.findIndex((p) => p._id === product?._id) === -1
				? false
				: true
			: false
	);

	const cartHandler = async (e) => {
		if (Object.keys(user).length !== 0) {
			if (e.target.innerText === "Go to Cart") {
				navigate("/cart", { state: location });
			}
			await addToCart(product);
			e.target.innerText = "Go to Cart";
			e.target.style.backgroundColor = "palegreen";
		} else navigate("/login", { state: location });
	};

	const wishlistHandler = (e) => {
		if (Object.keys(user).length !== 0) {
			if (!inWishlist) {
				addToWishlist(product);
				e.target.style.fontWeight = 900;
				e.target.style.color = "red";
				setInWishlist(true);
			} else {
				removeFromWishlist(product);
				e.target.style.fontWeight = 400;
				e.target.style.color = "";
				setInWishlist(false);
			}
		} else navigate("/login", { state: location });
	};

	return (
		<div className='card-container card-shadow'>
			<div className='parent-positioning'>
				<div className='card-margin'>
					<img src={product.image} alt='card-img' />
				</div>
				<div className='prod inside-container '>
					<h3
						style={{
							//style for title overflow
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
						}}>
						{product?.title}
					</h3>
					<span className='card-content'>Latest Arrival</span>
					<p className='card-item-cost'>
						{product.price === 0 ? "Free" : `Rs. ${product.price}`}
					</p>
					<button
						className='button card-button'
						onClick={cartHandler}
						style={{ backgroundColor: `${inCart ? "palegreen" : "#01CCFF"}` }}>
						{inCart ? "Go to Cart" : "Add to Cart"}
					</button>
					<span className='badge-overlay'>New</span>
					<i
						className='fa fa-heart-o icon-btn icon-size icon-overlay'
						style={{
							fontWeight: `${inWishlist ? "900" : ""}`,
							color: `${inWishlist ? "red" : ""}`,
						}}
						aria-hidden='true'
						onClick={wishlistHandler}></i>
					<span
						style={{
							position: "absolute",
							top: "17rem",
							left: "13rem",
							backgroundColor: `${
								product.rating >= 4
									? "green"
									: product.rating >= 3
									? "#ED9F3A"
									: product.rating >= 2
									? "#F45B19"
									: "red"
							}`,
							borderRadius: "20%",
							fontSize: "1.5rem",
							padding: "0 2px",
						}}>
						{product.rating} <i className='fa fa-star'></i>
					</span>
				</div>
			</div>
		</div>
	);
};
