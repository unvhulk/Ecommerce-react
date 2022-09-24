import { useNavigate, Link } from "react-router-dom";
import { useCart } from "contexts";

export const Card = (props) => {
	const { image } = props;
	// const { addToCart } = useCart();
	const navigate = useNavigate();
	return (
		<Link to='/products' className='link card-container card-shadow'>
			{/* <div className="card-container card-shadow"> */}
			<div className='parent-positioning'>
				<div className='card-margin'>
					<img src={image} alt='card-img'></img>
				</div>
				<div className='inside-container'>
					<h3>God Of War</h3>
					<span className='card-content'>Latest Arrival</span>
					<p className='card-item-cost'>Rs.3999</p>

					<button
						className='button card-button'
						// onClick={addToCart}
					>
						Add to Cart
					</button>

					<span className='badge-overlay'>New</span>
					<i
						className='fa fa-heart-o icon-btn icon-size icon-overlay'
						aria-hidden='true'
						onClick={() => navigate("/wishlist")}></i>
				</div>
			</div>
			{/* </div> */}
		</Link>
	);
};
