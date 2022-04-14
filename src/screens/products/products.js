import { Header, Footer, Filter, ProductCard } from "../../components";

import data from "../../assets/data.json";
export const Products = () => {
	return (
		<>
			{" "}
			<Header />
			<main className="main-container prod">
				<Filter />

				<div className="component-display-container flex-items vertical-cards">
					{data.data.map((users) => (
						<ProductCard title={users.author} />
					))}
					{data.data.map((users) => (
						<ProductCard title={users.author} />
					))}
				</div>
			</main>
			<Footer />
		</>
	);
};
