import "./orderSummaryComp.css";
export const OrderSummaryComp = ({ product }) => {
	return (
		<div className='order-comp'>
			<img src={product.image} alt='img' />
			<div className='order-desc'>
				<h2 className='prd-title ' aria-hidden='true'>
					{product.title}
				</h2>
				<p className='card-item-cost'>Rs.{product.price}</p>
				<div className='cart-qty-con'>
					<label htmlFor='quantity'>Quantity:</label>
					<div name='quantity' id='quantity'>
						{product.cartQty}
					</div>
				</div>
			</div>
		</div>
	);
};
