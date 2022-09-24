import { Link, useNavigate } from "react-router-dom";
import {
	useAuthContext,
	useCart,
	useSearch,
	useTheme,
	useWishlist,
} from "contexts";
import "./header.css";

export const Header = () => {
	const { user, LogoutHandler } = useAuthContext();
	const { cartProducts } = useCart();
	const { wishlistItems } = useWishlist();
	const { toggleTheme } = useTheme();
	const { searchText, setSearchText } = useSearch();
	const navigate = useNavigate();
	const searchBtn = () => {
		navigate("/products");
	};

	return (
		<nav className='component-display-container nav-bar'>
			<div className='nav-container'>
				<div className='nav-brand'>
					<img
						className='logo'
						src='https://xero-ecomm.netlify.app/assets/logo.png'
						alt='logo'></img>{" "}
					<Link className='component-library-link nav-icons' to='/'>
						<i className='fa' aria-hidden='true'>
							Xero
						</i>
					</Link>
				</div>
				<div className='search-bar'>
					<input
						className='input'
						placeholder='Search for products...'
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}></input>
					<button
						className='search-btn fa fa-search'
						aria-hidden='true'
						onClick={searchBtn}></button>
				</div>
				<ul className='nav-flex'>
					<div className='badge-wrapper pointer' onClick={toggleTheme}>
						<li className='list-style'>
							<i className='fa fa-moon fa-fw fa-xl' aria-hidden='true'></i>
						</li>
					</div>
					<div className='badge-wrapper'>
						<li className='list-style'>
							<Link className='link' to='/login'>
								<i
									className='fa nav-icons'
									aria-hidden='true'
									onClick={() => {
										if (user) LogoutHandler();
									}}>
									{user?.firstName ?? "Login"}
								</i>
							</Link>
						</li>
					</div>

					<div className='badge-wrapper'>
						<li className='list-style'>
							<Link className='link' to='/wishlist'>
								<i className='fa fa-heart nav-icons' aria-hidden='true'></i>
								{wishlistItems?.length !== undefined &&
								wishlistItems?.length > 0 ? (
									<div className='badge icon'>{wishlistItems?.length}</div>
								) : (
									""
								)}
							</Link>
						</li>
					</div>
					<div className='badge-wrapper'>
						<li className='list-style'>
							<Link className='link' to='/cart'>
								<i
									className='fa fa-shopping-cart nav-icons'
									aria-hidden='true'></i>
								{cartProducts?.length !== undefined &&
								cartProducts?.length > 0 ? (
									<div className='badge icon'>{cartProducts?.length}</div>
								) : (
									""
								)}
							</Link>
						</li>
					</div>
				</ul>
			</div>
		</nav>
	);
};
