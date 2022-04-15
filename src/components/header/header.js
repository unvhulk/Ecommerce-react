import { Link } from "react-router-dom";
export const Header = () => {
	return (
		<nav className="component-display-container nav-bar">
			<div className="nav-container">
				<div className="nav-brand">
					<img
						className="logo"
						src="https://xero-ecomm.netlify.app/assets/logo.png"
						alt="logo"
					></img>
					<Link className="component-library-link nav-icons" to="/">
						<i className="fa" aria-hidden="true">
							Xero
						</i>
					</Link>
				</div>
				<div className="search-bar">
					<input className="input" placeholder="Search for products..."></input>
					<button
						className="search-btn fa fa-search"
						aria-hidden="true"
					></button>
				</div>
				<ul className="nav-flex">
					<div className="badge-wrapper">
						<li className="list-style">
							<Link className="link" to="/login">
								<i className="fa nav-icons" aria-hidden="true">
									Login
								</i>
							</Link>
						</li>
					</div>

					<div className="badge-wrapper">
						<li className="list-style">
							<Link className="link" to="/wishlist">
								<i className="fa fa-heart nav-icons" aria-hidden="true"></i>
								<div className="badge icon">5</div>
							</Link>
						</li>
					</div>
					<div className="badge-wrapper">
						<li className="list-style">
							<Link className="link" to="/cart">
								<i
									className="fa fa-shopping-cart nav-icons"
									aria-hidden="true"
								></i>
								<div className="badge icon">5</div>
							</Link>
						</li>
					</div>
				</ul>
			</div>
		</nav>
	);
};
