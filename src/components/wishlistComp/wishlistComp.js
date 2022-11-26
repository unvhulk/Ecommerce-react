import { useCart, useWishlist } from "contexts";
import { useLocation, useNavigate } from "react-router-dom";
import "./wishlistComp.css";

export const WishlistComp = ({ item }) => {
	const { addToCart, cartProducts } = useCart();
	const { removeFromWishlist } = useWishlist();
	const navigate = useNavigate();
	const location = useLocation();

	const inCart = cartProducts
		? cartProducts.findIndex((p) => p._id === item?._id) === -1
			? false
			: true
		: false;

	const cartHandler = async (e) => {
		if (e.target.innerText === "Go to Cart") {
			navigate("/cart", { state: location });
		}
		await addToCart(item);
		e.target.innerHTML =
			"<h2 style='background-color : palegreen;'>Go to Cart</h2>";
	};

	return (
		<div
			className='product-card'
			style={{ border: `2px solid ${inCart ? "palegreen" : "#01CCFF"}` }}>
			<div className='card-img-container'>
				<img src={item.image} alt='card-img' />
			</div>
			<div className='productCard-desc'>
				<h3
					style={{
						//style for title overflow
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
					}}>
					{item.title}
				</h3>
				<span className=''>Latest Arrival</span>
				<div className=''>
					{item.price === 0 ? "Free" : `Rs. ${item.price}`}
				</div>

				<span className='badge-overlay'>New</span>
				<i
					className='fa fa-heart-o icon-btn icon-size icon-overlay wish'
					style={{ fontWeight: 900, color: "red" }}
					onClick={() => removeFromWishlist(item)}
					aria-hidden='true'
				/>
			</div>
			<button
				className='product-btn'
				onClick={cartHandler}
				style={{
					backgroundColor: `${inCart ? "palegreen" : "#01CCFF"}`,
					border: `2px solid ${inCart ? "palegreen" : "#01CCFF"}`,
				}}>
				<h2>{inCart ? "Go to Cart" : "Add to Cart"}</h2>
			</button>
		</div>
	);
};
