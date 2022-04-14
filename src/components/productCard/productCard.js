import { useNavigate } from "react-router-dom";
export const ProductCard = (props) => {
	const { title } = props;
	const navigate = useNavigate();
	return (
		<div className="card-container card-shadow">
			<div className="parent-positioning">
				<div className="card-margin">
					<img
						src="https://xero-ecomm.netlify.app/assets/cp1.jpg"
						alt="card-img"
					/>
				</div>
				<div className="inside-container">
					<h3>{title}</h3>
					<span className="card-content">Latest Arrival</span>
					<p className="card-item-cost">Rs.3999</p>
					<button
						className="button card-button"
						onClick={() => navigate("/cart")}
					>
						Add to Cart
					</button>
					<span className="badge-overlay">New</span>
					<i
						className="fa fa-heart-o icon-btn icon-size icon-overlay"
						aria-hidden="true"
					></i>
				</div>
			</div>
		</div>
	);
};
