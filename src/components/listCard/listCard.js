export const ListCard = ({ product, btnAction }) => {
	return (
		<div className='link card-container' to='/products' onClick={btnAction}>
			<div className='parent-positioning image-with-margin'>
				<img src={product.image} alt='card-img'></img>
				<div className='inside-container'>
					<h3
						className='child-positioning'
						style={{
							//style for title overflow
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
						}}>
						{product.title}
					</h3>
					<span className='overlay-text'>{product.categoryName}</span>
				</div>
			</div>
		</div>
	);
};
