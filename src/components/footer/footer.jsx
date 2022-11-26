import { Link } from "react-router-dom";
import "./footer.css";
export const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-logo'>
				<div className='logo-container'>
					<Link to='/'>
						<img
							className='logo-img'
							src='https://xero-ecomm.netlify.app/assets/logo.png'
							alt='logo'></img>
					</Link>
				</div>
				<Link className='logo-heading' to='/'>
					<h2>Xero E-commerce App</h2>
				</Link>
			</div>
			<div className='footer-nav'>
				<div className='explore-heading'>
					<h1>Explore</h1>
				</div>

				<ul className='explore'>
					<li>
						<Link to='/'>Home</Link>
					</li>

					<li>
						<Link to='/products'>Products</Link>
					</li>

					<li>
						<Link to='/wishlist'>Wishlist</Link>
					</li>

					<li>
						<Link to='/cart'>Cart</Link>
					</li>

					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link to='/signup'>Signup</Link>
					</li>
				</ul>
			</div>
			<div className='footer-connect'>
				<h1>Connect</h1>
				<div className='connect'>
					<a className='link' href='https://github.com/unvhulk'>
						<i className='fa fa-github social-icons' aria-hidden='true'>
							{" "}
						</i>
					</a>

					<a className='link' href='https://www.linkedin.com/in/unv/'>
						<i
							className='fa fa-linkedin-square social-icons'
							aria-hidden='true'>
							{" "}
						</i>
					</a>

					<a className='link' href='https://twitter.com/UNVishwakarma'>
						<i className='fa fa-twitter social-icons' aria-hidden='true'>
							{" "}
						</i>
					</a>
				</div>
			</div>
		</footer>
	);
};
