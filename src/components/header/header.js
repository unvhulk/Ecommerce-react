import { useState } from "react";
export const Header = () => {
	const { cartItems, setCartItems } = useState(0);
	return (
		<nav className="component-display-container nav-bar">
			<div className="nav-container">
				<div className="nav-brand">
					<img
						className="logo"
						src="https://xero-ecomm.netlify.app/assets/logo.png"
						alt="logo"
					></img>
					<a className="component-library-link nav-icons" href="/">
						<i className="fa" aria-hidden="true">
							Xero
						</i>
					</a>
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
							<a className="link" href="/login">
								<i className="fa nav-icons" aria-hidden="true">
									Login
								</i>
							</a>
						</li>
					</div>

					<div className="badge-wrapper">
						<li className="list-style">
							<a className="link" href="/wishlist">
								<i className="fa fa-heart nav-icons" aria-hidden="true"></i>
								<div className="badge icon">5</div>
							</a>
						</li>
					</div>
					<div className="badge-wrapper">
						<li className="list-style">
							<a className="link" href="/cart">
								<i
									className="fa fa-shopping-cart nav-icons"
									aria-hidden="true"
								></i>
								<div className="badge icon">{cartItems}</div>
							</a>
						</li>
					</div>
				</ul>
			</div>
		</nav>
	);
};
