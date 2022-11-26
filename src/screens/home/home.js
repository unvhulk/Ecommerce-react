import { useState, useEffect } from "react";
import { ListCard, CarouselCard, ProductCard } from "components";
import { useNavigate } from "react-router-dom";
import { useFilter } from "contexts";
import "./home.css";

export const Home = () => {
	const [data, setData] = useState({});
	const [categories, setCategories] = useState({});
	const { categoriesFilter, setCategoryFilter } = useFilter();
	const navigate = useNavigate();
	const handleCategorySelection = (category) => {
		setCategoryFilter({ ...categoriesFilter, [category]: true });
		navigate(`/products`);
	};
	useEffect(() => {
		fetch("/api/products", { method: "GET" })
			.then((res) => res.json())
			.then((json) => setData(json));
		fetch("/api/categories", { method: "GET" })
			.then((res) => res.json())
			.then((json) => setCategories(json));
	}, []);

	return (
		<div>
			<main style={{ minHeight: "69vh" }}>
				<CarouselCard />

				<div className='categories-container'>
					<h2 className='categories-header'>Popular Categories</h2>
					<div className='categories-list'>
						{categories.categories?.map((product) => (
							<ListCard
								product={product}
								key={product.id}
								btnAction={() => handleCategorySelection(product.categoryName)}
							/>
						))}
					</div>
				</div>

				<div className='productCard-container'>
					<h1 className='products-header'>Featured Products</h1>
					<div className='products-list'>
						{data.products?.slice(0, 5).map((product) => (
							<ProductCard product={product} key={product.id} />
						))}
					</div>
				</div>
			</main>
		</div>
	);
};
