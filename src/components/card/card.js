import { useNavigate } from "react-router-dom";
export const Card = (props) => {
	const { image } = props;
	const navigate = useNavigate();
	return (
		<div class="card-container card-shadow">
			<div class="parent-positioning">
				<div class="card-margin">
					<img src={image} alt="card-img"></img>
				</div>
				<div class="inside-container">
					<h3>God Of War</h3>
					<span class="card-content">Latest Arrival</span>
					<p class="card-item-cost">Rs.3999</p>

					<button class="button card-button" onClick={() => navigate("/cart")}>
						Add to Cart
					</button>

					<span class="badge-overlay">New</span>
					<i
						class="fa fa-heart-o icon-btn icon-size icon-overlay"
						aria-hidden="true"
					></i>
				</div>
			</div>
		</div>
	);
};
