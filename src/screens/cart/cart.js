import { Header, Footer, CartComp } from "../../components";

export const Cart = () => {
	return (
		<>
			{" "}
			<Header />
			<div className="main-container">
				<CartComp />
			</div>
			<Footer />
		</>
	);
};
