import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext, useCart, useWishlist } from "contexts";
import { useState } from "react";
import "./productCard.css";

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
			} else {
				await addToCart(product);
				e.target.innerHTML =
					"<h2 style='background-color: palegreen; border: 2px solid palegreen'>Go to Cart</h2>";
			}
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
		<div
			className='product-card'
			style={{
				border: `2px solid ${inCart ? "palegreen" : "#01CCFF"}`,
			}}>
			<div className='card-img-container'>
				<img src={product.image} alt='card-img' />
			</div>
			<div className='productCard-desc'>
				<h3
					style={{
						//style for title overflow
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
					}}>
					{product?.title}
				</h3>
				<span className=''>Latest Arrival</span>
				<div className=''>
					{product.price === 0 ? "Free" : `Rs. ${product.price}`}
				</div>

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
						top: "18.7rem",
						left: "15rem",
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
					{product.rating.toFixed(1)} <i className='fa fa-star'></i>
				</span>
			</div>
			<button
				className='product-btn'
				onClick={cartHandler}
				style={{
					backgroundColor: `${inCart ? "palegreen" : "#01CCFF"}`,
					border: `1px solid ${inCart ? "palegreen" : "#01CCFF"}`,
				}}>
				<h2>{inCart ? "Go to Cart" : "Add to Cart"}</h2>
			</button>
		</div>
	);
};
