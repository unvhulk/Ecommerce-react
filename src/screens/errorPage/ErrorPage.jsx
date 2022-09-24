import React from "react";

export const ErrorPage = () => {
	return (
		<div
			className='component-display-container'
			style={{
				height: "69vh",
				display: "grid",
				color: "red",
				fontWeight: 600,
				gridTemplateRows: "30% 40% 30%",
			}}>
			<h1 style={{ display: "grid", gridRow: "2/3", fontSize: "xx-large" }}>
				Error 404 page not found.
			</h1>
		</div>
	);
};
