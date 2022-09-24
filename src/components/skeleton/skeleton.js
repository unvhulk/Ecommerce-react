import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Outlet } from "react-router-dom";

export const Skeleton = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
