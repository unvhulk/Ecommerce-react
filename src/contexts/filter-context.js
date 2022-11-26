const { createContext, useContext, useState } = require("react");

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
	const initialState = {
		categories: {
			Action: false,
			Adventure: false,
			Horror: false,
			Puzzle: false,
			RPG: false,
		},
		price: 5000,
		ratings: 0,
		sort: "",
	};
	const [categoriesFilter, setCategoryFilter] = useState(
		initialState.categories
	);
	const [priceSlider, setPriceSlider] = useState(initialState.price);
	const [ratings, setRatings] = useState(initialState.ratings);
	const [sort, setSort] = useState(initialState.sort);
	const resetFilters = () => {
		setCategoryFilter(initialState.categories);
		setPriceSlider(initialState.price);
		setRatings(initialState.ratings);
		setSort(initialState.sort);
	};
	return (
		<FilterContext.Provider
			value={{
				categoriesFilter,
				setCategoryFilter,
				priceSlider,
				setPriceSlider,
				ratings,
				setRatings,
				sort,
				setSort,
				resetFilters,
			}}>
			{children}
		</FilterContext.Provider>
	);
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
