import { WishlistComp } from "components";
import { useWishlist } from "contexts";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
	const { wishlistItems } = useWishlist();
	const navigate = useNavigate();
	return (
		<>
			<main className='wishlist-container'>
				{wishlistItems?.length === 0 || wishlistItems === undefined ? (
					<>
						<div className='cart-header'>
							<h1 aria-hidden='true'>WISHLIST</h1>
						</div>
						<div className='empty-cart'>
							<h1>
								Your wishlist is empty. Check out our{" "}
								<span onClick={() => navigate("/products")}>products</span>.
							</h1>
						</div>
					</>
				) : (
					<>
						<div className='wishlist-header'>
							<h1 aria-hidden='true'>
								WISHLIST {`(${wishlistItems?.length})`}
							</h1>
						</div>
						<div className='wishlist-grid'>
							{wishlistItems?.map((item) => (
								<WishlistComp item={item} key={item?.id} />
							))}
						</div>
					</>
				)}
			</main>
		</>
	);
};
