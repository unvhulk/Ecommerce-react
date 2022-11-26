import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { carouselData } from "./carouselData";
import "./carouselCard.css";

export const CarouselCard = () => {
	const [transition, setTransition] = useState({
		count: 0,
		imageOne: carouselData[0],
		imageTwo: carouselData[1],
	});

	useEffect(() => {
		const intID = setInterval(() => {
			setTransition((transition) => {
				let newCountOne = (transition.count + 1) % 6;
				let newCountTwo = (transition.count + 2) % 6;
				return {
					count: newCountOne,
					imageOne: carouselData[newCountOne],
					imageTwo: carouselData[newCountTwo],
				};
			});
		}, 3000);
		return () => clearInterval(intID);
	}, []);

	return (
		<div className='component-display-container flex-items carousle-card'>
			<div
				className='component-display-container card-change lt'
				onClick={() => {
					let prevCountOne = Math.abs(transition.count - 1) % 6;
					let prevCountTwo = Math.abs(transition.count - 2) % 6;
					setTransition({
						...transition,
						count: prevCountOne,
						imageOne: carouselData[prevCountOne],
						imageTwo: carouselData[prevCountTwo],
					});
				}}>
				<i className='fa fa-arrow-left' aria-hidden='true'></i>
			</div>
			<div
				className=''
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
				}}>
				<img
					src={transition.imageOne}
					alt='#'
					style={{
						width: "48vw",
						height: "90vh",
					}}></img>
				<img
					src={transition.imageTwo}
					alt='#'
					style={{
						width: "48vw",
						height: "90vh",
					}}></img>
			</div>
			<div
				className='component-display-container card-change rt'
				onClick={() => {
					let nextCountOne = (transition.count + 1) % 6;
					let nextCountTwo = (transition.count + 2) % 6;
					setTransition({
						...transition,
						count: nextCountOne,
						imageOne: carouselData[nextCountOne],
						imageTwo: carouselData[nextCountTwo],
					});
				}}>
				<i className='fa fa-arrow-right' aria-hidden='true'></i>
			</div>
			<Link to='/products'>
				<button className='shop-now'>Shop Now</button>
			</Link>
		</div>
	);
};
