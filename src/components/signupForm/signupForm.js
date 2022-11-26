import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "contexts";
import { useEffect, useState } from "react";
import "./signupForm.css";

export const SignupForm = () => {
	const [formInfo, setFormInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [formErrors, setFormErrors] = useState({});
	const { SignupHandler, error, setError } = useAuthContext();
	const location = useLocation();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormInfo({ ...formInfo, [name]: value });
	};

	// Validate the form values
	const validate = (values) => {
		const errors = {};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.firstName) {
			errors.firstName = "Firstname is required";
		}
		if (!values.lastName) {
			errors.lastName = "Lastname is required";
		}
		if (!values.email) {
			errors.email = "Email is required";
		} else if (!emailRegex.test(values.email)) {
			errors.email = "This is not a valid Email format ";
		}
		if (!values.password) {
			errors.password = "Password is required";
		} else if (values.password.length < 5) {
			errors.password = "Password must be more than 6 characters";
		}
		if (!values.confirmPassword) {
			errors.confirmPassword = "Confirm Password is required";
		} else if (values.confirmPassword !== values.password) {
			errors.confirmPassword = "Passwords do not match";
		}
		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let vali = validate(formInfo);
		console.log("form info:");
		console.log(formInfo);
		setFormErrors(vali);
		if (Object.keys(vali).length === 0) {
			SignupHandler(formInfo);
		}
	};

	useEffect(() => {
		setError("");
	}, [location.pathname]);

	return (
		<div className='Signup-form-con'>
			<div className='signup-header'>
				<h1 aria-hidden='true'>SIGNUP</h1>
				<p className='error-msg'>{error?.errors}</p>
			</div>
			<form className='input-form' onSubmit={handleSubmit}>
				<div className='form-fields'>
					<input
						name='firstName'
						type='firstName'
						placeholder='First name'
						value={formInfo.firstName}
						onChange={handleChange}
						required
					/>
					<p className='error-msg'>{formErrors?.firstName}</p>
				</div>
				<div className='form-fields'>
					<input
						name='lastName'
						type='lastName'
						placeholder='Last Name'
						value={formInfo.lastName}
						onChange={handleChange}
						required
					/>
					<p className='error-msg'>{formErrors?.lastName}</p>
				</div>
				<div className='form-fields'>
					<input
						name='email'
						type='email'
						placeholder='Email'
						value={formInfo.email}
						onChange={handleChange}
						required
					/>
					<p className='error-msg'>{formErrors?.email}</p>
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
					<p className='error-msg'>{formErrors?.password}</p>
				</div>
				<div className='form-fields'>
					<input
						name='confirmPassword'
						type='password'
						minLength={8}
						placeholder='Confirm Password'
						value={formInfo.confirmPassword}
						onChange={handleChange}
						autoComplete='none'
						required
					/>
					<p className='error-msg'>{formErrors?.confirmPassword}</p>
				</div>

				<div className='input-buttons'>
					<button className='button button-login' type='submit'>
						Signup
					</button>
				</div>
				<Link
					className='btn-sec'
					to='/login'
					state={{ from: location.state?.from }}>
					<span className='secondary-txt'>Already have an account {"->"}</span>
				</Link>
			</form>
		</div>
	);
};
