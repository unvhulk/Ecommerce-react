import { useState, useEffect } from "react";
import { ListCard, CarouselCard, ProductCard } from "components";
import { useNavigate } from "react-router-dom";
import { useFilter } from "contexts";

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
				<div className='component-display-container home vertical-cards flex-items'>
					{categories.categories?.map((product) => (
						<ListCard
							product={product}
							key={product.id}
							btnAction={() => handleCategorySelection(product.categoryName)}
						/>
					))}
				</div>
				<CarouselCard />
				<div className='component-display-container home vertical-cards flex-items'>
					{data.products?.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
				</div>
			</main>
		</div>
	);
};
