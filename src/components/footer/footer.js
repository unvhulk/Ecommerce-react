import { Link } from "react-router-dom";
export const Footer = () => {
	return (
		<footer class="footer">
			<div class="footer-content">
				<div>
					<Link to="/">
						<img
							class="footer-logo"
							src="https://xero-ecomm.netlify.app/assets/logo.png"
							alt="logo"
						></img>
					</Link>
				</div>
				<div class="footer-nav">
					<a class="link" href="https://github.com/unvhulk">
						<i class="fa fa-github social-icons" aria-hidden="true">
							{" "}
							GITHUB
						</i>
					</a>

					<a class="link" href="https://www.linkedin.com/in/unv/">
						<i class="fa fa-linkedin-square social-icons" aria-hidden="true">
							{" "}
							LINKEDIN
						</i>
					</a>

					<a class="link" href="https://twitter.com/UNVishwakarma">
						<i class="fa fa-twitter social-icons" aria-hidden="true">
							{" "}
							TWITTER
						</i>
					</a>
				</div>
			</div>
		</footer>
	);
};
