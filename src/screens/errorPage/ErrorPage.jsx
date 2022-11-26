import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
	return (
		<div
			className='component-display-container'
			style={{
				height: "89vh",
				display: "grid",
				fontWeight: 600,
				gridTemplateRows: "30% 40% 30%",
			}}>
			<div style={{ display: "grid", gridRow: "2/3", fontSize: "large" }}>
				<h1>Error 404 page not found.</h1>
				<Link
					to='/'
					style={{
						display: "grid",
						justifyContent: "center",
						color: "var(--COLOR-PRIMARY)",
					}}>
					<h2>Return to Homepage</h2>
				</Link>
			</div>
		</div>
	);
};
