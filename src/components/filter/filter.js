export const Filter = () => {
	return (
		<aside className="position-fixed sidebar-flex">
			<div className="sidebar-header">
				<h2 className="margin">Filters</h2>
				<p className="margin">Clear</p>
			</div>
			<div className="filter">
				<h3>Price</h3>
				<div className="slider">
					<p className="slider-lt">$500</p>
					<p className="slider-rt">$5000</p>
				</div>
				<input type="range" />
				<h3>Sort by</h3>
				<label for="radio-1">
					<input className="margin" id="radio-1" name="radio" type="radio" />
					Low to High
				</label>
				<label for="radio-2">
					<input className="margin" id="radio-2" name="radio" type="radio" />
					High to Low
				</label>
			</div>
			<h3>Category</h3>
			<div className="filter">
				<label for="checkbox-1">
					<input
						className="margin"
						id="checkbox-1"
						name="checkbox"
						type="checkbox"
					/>
					Action
				</label>
				<label for="checkbox-2">
					<input
						className="margin"
						id="checkbox-2"
						name="checkbox"
						type="checkbox"
					/>
					Adventure
				</label>
				<label for="checkbox-3">
					<input
						className="margin"
						id="checkbox-3"
						name="checkbox"
						type="checkbox"
					/>
					Puzzle
				</label>
				<label for="checkbox-4">
					<input
						className="margin"
						id="checkbox-4"
						name="checkbox"
						type="checkbox"
					/>
					Horror
				</label>
				<label for="checkbox-5">
					<input
						className="margin"
						id="checkbox-5"
						name="checkbox"
						type="checkbox"
					/>
					RPG
				</label>
			</div>
			<h3>Ratings</h3>
			<div className="filter">
				<label for="rating-radio-1">
					<input
						className="margin"
						id="rating-radio-1"
						name="radio"
						type="radio"
					/>
					4 Star &amp; above
				</label>
				<label for="rating-radio-2">
					<input
						className="margin"
						id="rating-radio-2"
						name="radio"
						type="radio"
					/>
					3 Star &amp; above
				</label>
				<label for="rating-radio-3">
					<input
						className="margin"
						id="rating-radio-3"
						name="radio"
						type="radio"
					/>
					2 Star &amp; above
				</label>
				<label for="rating-radio-4">
					<input
						className="margin"
						id="rating-radio-4"
						name="radio"
						type="radio"
					/>
					1 Star &amp; above
				</label>
			</div>
		</aside>
	);
};
