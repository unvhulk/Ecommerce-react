import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "contexts";
import "./loginForm.css";

export const LoginForm = () => {
	const [formInfo, setFormInfo] = useState({
		email: "",
		password: "",
	});
	const [formErrors, setFormErrors] = useState({});
	const { LoginHandler, error, setError } = useAuthContext();
	const location = useLocation();
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormInfo({ ...formInfo, [name]: value });
		setFormErrors({ ...formErrors, [name]: "" });
	};

	// Validate the form values
	const validate = (values) => {
		const errors = {};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.email) {
			errors.email = "Email is required";
		} else if (!emailRegex.test(values.email)) {
			errors.email = "This is not a valid Email format ";
		}
		if (!values.password) {
			errors.password = "Password is required";
		}
		return errors;
	};

	const guestUserHandler = () => {
		setFormInfo({
			email: "darkAether@gmail.com",
			password: "asdfasdf",
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let vali = validate(formInfo);
		setFormErrors(vali);
		if (Object.keys(vali).length === 0) {
			LoginHandler(formInfo);
		}
	};

	useEffect(() => setError(""), [location.pathname]);
	return (
		<main className='main-container form '>
			<div className='component-display-container cart-items flex-items'>
				<div className='component-display-container form-con login-form'>
					<div className='cart-header'>
						<h1 className='fa' aria-hidden='true'>
							login
						</h1>
						<p className='error-msg'>{error?.errors}</p>
					</div>
					<form className='input-form' onSubmit={handleSubmit}>
						<div className='input-email'>
							<label htmlFor='email-input' className='fa' aria-hidden='true'>
								email
							</label>
							<input
								name='email'
								type='email'
								placeholder='john.doe@xyz.com'
								className='form-input-box'
								value={formInfo.email}
								onChange={handleChange}
								required
							/>
							<p className='error-msg'>{formErrors?.firstName}</p>
						</div>
						<div className='input-password'>
							<label htmlFor='password' className='fa' aria-hidden='true'>
								password
							</label>
							<input
								name='password'
								type='password'
								minLength={8}
								placeholder='************************'
								className='form-input-box password'
								value={formInfo.password}
								onChange={handleChange}
								autoComplete='none'
								required
							/>
							<p className='error-msg'>{formErrors?.firstName}</p>
						</div>

						<div className='btn-container'>
							<button className='button form-btn' type='submit'>
								Login
							</button>
						</div>
						<span className='secondary-txt' onClick={guestUserHandler}>
							Guest User
						</span>
						<Link
							className='btn-sec'
							to='/signup'
							state={{ from: location.state?.from }}>
							<span className='secondary-txt'>Create an account &gt;</span>
						</Link>
					</form>
				</div>
			</div>
		</main>
	);
};
