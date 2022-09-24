import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { carouselData } from "../carouselCard/carouselData";
export const CarouselCard = () => {
	const [transition, setTransition] = useState({
		count: 0,
		image: carouselData[0],
	});

	useEffect(() => {
		const intID = setInterval(() => {
			setTransition((transition) => {
				return {
					count: (transition.count + 1) % 5,
					image: carouselData[(transition.count + 1) % 5],
				};
			});
		}, 3000);
		return () => clearInterval(intID);
	}, []);

	return (
		<div className='component-display-container flex-items'>
			<div
				className='component-display-container card-change lt'
				onClick={() =>
					setTransition({
						...transition,
						count: (transition.count - 1) % 5,
						image: carouselData[(transition.count - 1) % 5],
					})
				}>
				<i className='fa fa-arrow-left' aria-hidden='true'></i>
			</div>
			<Link className='responsive-image' to='/products'>
				<img src={transition.image} alt='#'></img>
			</Link>
			<div
				className='component-display-container card-change rt'
				onClick={() =>
					setTransition({
						...transition,
						count: (transition.count + 1) % 5,
						image: carouselData[(transition.count + 1) % 5],
					})
				}>
				<i className='fa fa-arrow-right' aria-hidden='true'></i>
			</div>
		</div>
	);
};
