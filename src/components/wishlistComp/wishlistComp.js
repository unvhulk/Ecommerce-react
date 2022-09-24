import { useCart, useWishlist } from "contexts";
import { useLocation, useNavigate } from "react-router-dom";

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
		e.target.innerText = "Go to Cart";
		e.target.style.backgroundColor = "palegreen";
	};
	return (
		<div className='card-container card-shadow'>
			<div className='parent-positioning'>
				<div className='card-margin'>
					<img src={item.image} alt='card-img' />
				</div>
				<div className='prod inside-container'>
					<h3
						style={{
							//style for title overflow
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
						}}>
						{item.title}
					</h3>
					<span className='card-content'>Latest Arrival</span>
					<p className='card-item-cost'>Rs.3999</p>
					<button
						className='button card-button'
						onClick={cartHandler}
						style={{ backgroundColor: `${inCart ? "palegreen" : "#01CCFF"}` }}>
						{inCart ? "Go to Cart" : "Add to Cart"}
					</button>
					<span className='badge-overlay'>New</span>
					<i
						className='fa fa-heart-o icon-btn icon-size icon-overlay wish'
						style={{ fontWeight: 900, color: "red" }}
						onClick={() => removeFromWishlist(item)}
						aria-hidden='true'
					/>
				</div>
			</div>
		</div>
	);
};
