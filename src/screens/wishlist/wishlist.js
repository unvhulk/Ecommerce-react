import { Header, Footer, WishlistComp } from "../../components";

import data from "../../assets/data.json";

export const Wishlist = () => {
	return (
		<>
			{" "}
			<Header />
			<main className="main-container wish">
				<div className="component-display-container cart-items">
					<div className="cart-header">
						<h1 class="fa" aria-hidden="true">
							Wishlist
						</h1>
					</div>
					<div className="grid-items">
						{" "}
						{data.data.map((users) => (
							<WishlistComp title={users} />
						))}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};
