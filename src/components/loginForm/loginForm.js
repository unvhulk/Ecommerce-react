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
		<main className='login-form'>
			<div className='login-header'>
				<h1 aria-hidden='true'>LOGIN</h1>
				<p className='error-msg'>{error?.errors}</p>
			</div>
			<form className='input-form' onSubmit={handleSubmit}>
				<div className='form-fields'>
					<input
						name='email'
						type='email'
						placeholder='E-mail'
						value={formInfo.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-fields'>
					<input
						name='password'
						type='password'
						minLength={8}
						placeholder='Password'
						value={formInfo.password}
						onChange={handleChange}
						autoComplete='none'
						required
					/>
				</div>
				<div className='input-buttons'>
					<button className='button button-login' type='submit'>
						Login
					</button>
				</div>
				<div className='input-buttons'>
					<button className='button button-guest' onClick={guestUserHandler}>
						Guest User
					</button>
				</div>
				<Link
					className='btn-sec'
					to='/signup'
					state={{ from: location.state?.from }}>
					<span className='secondary-txt'>Create new account {"->"} </span>
				</Link>
			</form>
		</main>
	);
};
