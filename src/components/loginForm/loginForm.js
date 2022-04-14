import { useState } from "react";
export const LoginForm = (props) => {
	const { onSubmit } = props;
	const [formInfo, setFormInfo] = useState({
		email: "",
		password: "",
		checkbox: false,
	});
	const handleChange = (event) => {
		if (event.target.type !== "checkbox")
			setFormInfo({ ...formInfo, [event.target.type]: event.target.value });
		else setFormInfo({ ...formInfo, [event.target.type]: !formInfo.checkbox });
		console.log(formInfo);
	};
	const verifyForm = () => {
		let error = false;
		if (formInfo.email === "" || formInfo.password === "") {
			error = true;
			alert("Please Fill All The Fields");
		}
		if (!error) {
			console.log("Success");
			onSubmit(formInfo);
		}
	};
	return (
		<main className="main-container form">
			<div className="component-display-container cart-items flex-items">
				<div className="component-display-container form-con">
					<div className="cart-header">
						<h1 className="fa" aria-hidden="true">
							login
						</h1>
					</div>
					<form className="input-form">
						<label htmlFor="email-input" className="fa" aria-hidden="true">
							email{formInfo.email}
						</label>
						<input
							type="email"
							placeholder=" john.doe@xyz.com"
							className="form-input-box"
							value={formInfo.email}
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="password" className="fa" aria-hidden="true">
							password{formInfo.password}
						</label>
						<input
							type="password"
							minLength={8}
							placeholder=" ************************"
							className="form-input-box password"
							value={formInfo.password}
							onChange={(e) => handleChange(e)}
						/>
						<div className="forget-pass">
							<a href="/" className="forget-txt">
								<span className="secondary-txt">Forget your password?</span>
							</a>
							<div className="remember-txt">
								<input
									type="checkbox"
									value={formInfo.checkbox}
									onChange={(e) => handleChange(e)}
								/>
								<span className="rem-txt">Remember me {formInfo.checkbox}</span>
							</div>
						</div>
						<button
							className="button form-btn"
							// type="submit"
							onClick={() => verifyForm()}
						>
							Login
						</button>
						<a className="btn-sec" href="/signup">
							<span className="secondary-txt">Create an account &gt;</span>
						</a>
					</form>
				</div>
			</div>
		</main>
	);
};
