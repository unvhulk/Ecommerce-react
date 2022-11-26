import "../listCard/listCard.css";

export const ListCard = ({ product, btnAction }) => {
	return (
		<div className='list-card' onClick={btnAction}>
			<div className='img-container'>
				<img src={product.image} alt='card-img' />
			</div>
			<div className='category-container'>
				<h2>{product.categoryName}</h2>
			</div>
		</div>
	);
};
