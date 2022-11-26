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
	const { user } = useAuthContext();
	const { cartProducts } = useCart();
	const { wishlistItems } = useWishlist();
	const { toggleTheme } = useTheme();
	const { searchText, setSearchText } = useSearch();
	const navigate = useNavigate();
	const searchBtn = () => {
		navigate("/products");
	};

	return (
		<nav className='header'>
			<div className='nav-brand'>
				<Link className='favicon' to='/'>
					<img
						className='logo'
						src='https://xero-ecomm.netlify.app/assets/logo.png'
						alt='logo'></img>{" "}
				</Link>
			</div>
			<div className='search-bar'>
				<input
					className='input'
					placeholder='Search for products...'
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}></input>
				<button
					className='search-button fa fa-search'
					aria-hidden='true'
					onClick={searchBtn}></button>
			</div>
			<div className='nav-icons'>
				<div className='badge-container pointer' onClick={toggleTheme}>
					<i className='fa fa-moon fa-fw fa-xl' aria-hidden='true'></i>
				</div>
				<div className='badge-container'>
					<Link className='link' to='/profile/account'>
						<div
							aria-hidden='true'
							style={{
								fontFamily: "Poppins",
								fontWeight: "600",
								fontSize: "3rem",
							}}>
							{user?.firstName?.toUpperCase() ?? "LOGIN"}
						</div>
					</Link>
				</div>

				<div className='badge-container'>
					<Link className='link' to='/wishlist'>
						<i className='fa fa-heart ' aria-hidden='true'></i>
						{wishlistItems?.length !== undefined &&
						wishlistItems?.length > 0 ? (
							<div className='badge-icon wishlist'>{wishlistItems?.length}</div>
						) : (
							""
						)}
					</Link>
				</div>
				<div className='badge-container'>
					<Link className='link' to='/cart'>
						<i className='fa fa-shopping-cart ' aria-hidden='true'></i>
						{cartProducts?.length !== undefined && cartProducts?.length > 0 ? (
							<div className='badge-icon cart'>{cartProducts?.length}</div>
						) : (
							""
						)}
					</Link>
				</div>
			</div>
		</nav>
	);
};
