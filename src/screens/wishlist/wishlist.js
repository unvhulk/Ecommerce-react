import { WishlistComp } from "components";
import { useWishlist } from "contexts";

export const Wishlist = () => {
	const { wishlistItems, removeFromWishlist } = useWishlist();
	return (
		<>
			<main className='main-container wish'>
				<div className='component-display-container cart-items'>
					<div className='cart-header'>
						<h1 className='fa' aria-hidden='true'>
							Wishlist {`(${wishlistItems?.length})` ?? ""}
						</h1>
					</div>
					<div className='grid-items'>
						{wishlistItems?.map((item) => (
							<WishlistComp item={item} key={item?.id} />
						))}
					</div>
				</div>
			</main>
		</>
	);
};
