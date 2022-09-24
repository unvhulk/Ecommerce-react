import { Link } from "react-router-dom";
export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div>
					<Link to="/">
						<img
							className="footer-logo"
							src="https://xero-ecomm.netlify.app/assets/logo.png"
							alt="logo"
						></img>
					</Link>
				</div>
				<div className="footer-nav">
					<a className="link" href="https://github.com/unvhulk">
						<i className="fa fa-github social-icons" aria-hidden="true">
							{" "}
							GITHUB
						</i>
					</a>

					<a className="link" href="https://www.linkedin.com/in/unv/">
						<i
							className="fa fa-linkedin-square social-icons"
							aria-hidden="true"
						>
							{" "}
							LINKEDIN
						</i>
					</a>

					<a className="link" href="https://twitter.com/UNVishwakarma">
						<i className="fa fa-twitter social-icons" aria-hidden="true">
							{" "}
							TWITTER
						</i>
					</a>
				</div>
			</div>
		</footer>
	);
};
