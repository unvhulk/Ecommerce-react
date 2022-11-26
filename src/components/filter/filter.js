import { useFilter } from "contexts";
import "./filter.css";

export const Filter = () => {
	const {
		categoriesFilter,
		setCategoryFilter,
		priceSlider,
		setPriceSlider,
		ratings,
		setRatings,
		sort,
		setSort,
		resetFilters,
	} = useFilter();

	const ToggleCategory = (e) => {
		const { name, checked } = e.target;
		setCategoryFilter({ ...categoriesFilter, [name]: checked });
	};

	const RatingsCategory = (e) => {
		setRatings(e.target.value);
	};

	const SortCategory = (e) => {
		setSort(e.target.value);
	};

	return (
		<aside className='position-fixed sidebar-flex filter-container'>
			<div className='sidebar-header'>
				<h2 className='margin'>Filters</h2>
				<p className='margin' onClick={resetFilters}>
					Clear
				</p>
			</div>
			<div className='filter'>
				<h3>Price : Rs.{priceSlider}</h3>
				<input
					type='range'
					min='0'
					max='5000'
					step='500'
					value={priceSlider}
					onChange={(e) => {
						setPriceSlider(Number(e.target.value));
					}}
				/>
				<div className='slider'>
					<p className='slider-lt'>Rs. 0</p>
					<p className='slider-rt'>Rs. 5000</p>
				</div>
			</div>
			<h3>Category</h3>
			<div className='filter'>
				<label htmlFor='checkbox-1'>
					<input
						className='margin'
						id='checkbox-1'
						name='Action'
						type='checkbox'
						checked={categoriesFilter.Action === true}
						onChange={ToggleCategory}
					/>
					Action
				</label>
				<label htmlFor='checkbox-2'>
					<input
						className='margin'
						id='checkbox-2'
						name='Adventure'
						type='checkbox'
						checked={categoriesFilter.Adventure === true}
						onChange={ToggleCategory}
					/>
					Adventure
				</label>
				<label htmlFor='checkbox-3'>
					<input
						className='margin'
						id='checkbox-3'
						name='Puzzle'
						type='checkbox'
						checked={categoriesFilter.Puzzle === true}
						onChange={ToggleCategory}
					/>
					Puzzle
				</label>
				<label htmlFor='checkbox-4'>
					<input
						className='margin'
						id='checkbox-4'
						name='Horror'
						type='checkbox'
						checked={categoriesFilter.Horror === true}
						onChange={ToggleCategory}
					/>
					Horror
				</label>
				<label htmlFor='checkbox-5'>
					<input
						className='margin'
						id='checkbox-5'
						name='RPG'
						type='checkbox'
						checked={categoriesFilter.RPG === true}
						onChange={ToggleCategory}
					/>
					RPG
				</label>
			</div>
			<h3>Ratings</h3>
			<div className='filter'>
				<label htmlFor='rating-radio-1'>
					<input
						className='margin'
						id='rating-radio-1'
						name='radio1'
						type='radio'
						value='1'
						checked={ratings === "1"}
						onChange={RatingsCategory}
					/>
					1 Star &amp; above
				</label>
				<label htmlFor='rating-radio-2'>
					<input
						className='margin'
						id='rating-radio-2'
						name='radio2'
						type='radio'
						value='2'
						checked={ratings === "2"}
						onChange={RatingsCategory}
					/>
					2 Star &amp; above
				</label>
				<label htmlFor='rating-radio-3'>
					<input
						className='margin'
						id='rating-radio-3'
						name='radio3'
						type='radio'
						value='3'
						checked={ratings === "3"}
						onChange={RatingsCategory}
					/>
					3 Star &amp; above
				</label>
				<label htmlFor='rating-radio-4'>
					<input
						className='margin'
						id='rating-radio-4'
						name='radio4'
						type='radio'
						value='4'
						checked={ratings === "4"}
						onChange={RatingsCategory}
					/>
					4 Star &amp; above
				</label>
			</div>
			<h3>Sort by</h3>
			<div className='filter'>
				<label htmlFor='Low to High'>
					<input
						className='margin'
						id='sort-1'
						name='low-to-high'
						type='radio'
						value='low-to-high'
						checked={sort === "low-to-high"}
						onChange={SortCategory}
					/>
					Price-Low to High
				</label>
				<label htmlFor='High to Low'>
					<input
						className='margin'
						id='sort-2'
						name='high-to-low'
						type='radio'
						value='high-to-low'
						checked={sort === "high-to-low"}
						onChange={SortCategory}
					/>
					Price-High to Low
				</label>
			</div>
		</aside>
	);
};
