import { Filter, ProductCard } from "components";
import { useEffect, useState } from "react";
import { useSearch, useFilter } from "contexts";
export const Products = () => {
	const [data, setData] = useState([]);
	const [fetchedData, setFetchedData] = useState([]);
	const { searchText } = useSearch();
	const { categoriesFilter, priceSlider, ratings, sort } = useFilter();

	useEffect(() => {
		fetch("/api/products", { method: "GET" })
			.then((res) => res.json())
			.then((json) => {
				setData(json.products);
				filterResult(json.products);
			});
	}, []);

	useEffect(() => {
		filterResult(data);
	}, [categoriesFilter, priceSlider, ratings, sort]);

	const filterResult = (data) => {
		let filterCat = [];
		for (const category in categoriesFilter) {
			if (categoriesFilter[category] === true) filterCat.push(category);
		}

		if (filterCat.length !== 0) {
			let foundItems = [].concat(
				...filterCat.map((category) => {
					return data?.filter((item) => {
						return item.categoryName === category;
					});
				})
			);

			setFetchedData(foundItems);
		} else {
			setFetchedData(data);
		}
	};

	return (
		<>
			<main className='main-container'>
				<Filter />
				<div className='component-display-container prod'>
					<h1>Showing all products</h1>
					<h3>Showing {fetchedData?.length} products</h3>
					<br />
					<div className='grid-items vertical-cards'>
						{fetchedData
							?.sort((a, b) => {
								if (sort === "") {
									return a.id - b.id;
								} else if (sort === "high-to-low") {
									return b.price - a.price;
								} else if (sort === "low-to-high") {
									return a.price - b.price;
								}
								return 0;
							})
							.filter((item) => {
								if (item.rating >= ratings) return item;
								return 0;
							})
							.filter((item) => {
								if (item.price <= priceSlider) {
									return item;
								}
								return 0;
							})
							.filter((item) => {
								if (searchText === "") return item;
								else if (
									item.title.toLowerCase().includes(searchText.toLowerCase())
								)
									return item;
								return 0;
							})
							.map((products) => {
								return <ProductCard product={products} key={products._id} />;
							})}
					</div>
				</div>
			</main>
		</>
	);
};
