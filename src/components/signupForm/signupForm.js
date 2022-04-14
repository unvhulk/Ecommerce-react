export const SignupForm = () => {
	return (
		<div className="component-display-container cart-items flex-items">
			<div className="component-display-container form-con">
				<div className="cart-header">
					<h1 className="fa" aria-hidden="true">
						Signup
					</h1>
				</div>
				<form className="input-form">
					<label for="email-input" className="fa" aria-hidden="true">
						email{" "}
					</label>
					<input
						type="email"
						placeholder=" john.doe@xyz.com"
						className="form-input-box"
					/>
					<label for="password" className="fa" aria-hidden="true">
						password{" "}
					</label>
					<input
						type="password"
						minlength="8"
						placeholder=" ************************"
						className="form-input-box password"
					/>
					<div className="forget-pass">
						<div className="terms-txt">
							<input type="checkbox" />
							<span className="rem-txt">
								I accept all Terms &amp; Conditions
							</span>
						</div>
					</div>
					<button className="button form-btn" type="submit">
						Signup
					</button>
					<a className="btn-sec" href="/login">
						<span className="secondary-txt">Already have an account &gt;</span>
					</a>
				</form>
			</div>
		</div>
	);
};
