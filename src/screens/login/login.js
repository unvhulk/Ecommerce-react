import { Header, Footer, LoginForm } from "../../components";

export const Login = () => {
	const onSubmit = (item) => {
		console.log("On Submit : ", item);
	};
	return (
		<>
			{" "}
			<Header />
			<LoginForm onSubmit={onSubmit} />
			<Footer />
		</>
	);
};
