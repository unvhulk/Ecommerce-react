import { Link } from "react-router-dom";
export const ListCard = (props) => {
	const { title } = props;
	return (
		<Link className="link card-container" to="/products">
			<div className="parent-positioning image-with-margin">
				<img
					src="https://xero-ecomm.netlify.app/assets/cp1.jpg"
					alt="card-img"
				></img>
				<div className="inside-container">
					<h3 className="child-positioning">{title}</h3>
					<span className="overlay-text">Availble on PS4</span>
				</div>
			</div>
		</Link>
	);
};
