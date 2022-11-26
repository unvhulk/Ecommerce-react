import { useState, useEffect } from "react";
import { useAuthContext } from "contexts";
import "./account.css";

export const Account = () => {
	const [isEditing, setIsEditing] = useState(false);
	const { user, setUser } = useAuthContext();
	const { firstName, lastName, email } = user ?? { firstName: "", email: "" };
	const [fName, setFname] = useState("");
	const [lName, setLname] = useState("");

	useEffect(() => {
		setFname(firstName);
		setLname(lastName);
	}, [firstName, lastName]);

	const handleToggleEditing = () => {
		setIsEditing((editing) => !editing);
	};

	const isValidName = fName.length > 1;

	const handleFnameChange = (e) => {
		setFname(e.target.value);
	};
	const handleLnameChange = (e) => {
		setLname(e.target.value);
	};

	const handleSaveName = () => {
		setUser((user) => ({ ...user, firstName: fName, lastName: lName }));
		handleToggleEditing();
	};

	return (
		<div className='user-details'>
			<button className='edit-btn' onClick={handleToggleEditing}>
				EDIT
			</button>
			<div>
				<span className='user-label'>
					<h2>Email:</h2>
					<p>{email}</p>
				</span>
				{isEditing ? (
					<div className='editing-labels'>
						<div className=''>
							<input
								required={true}
								label='name'
								type='text'
								validation={isValidName.toString()}
								value={fName}
								onChange={handleFnameChange}
							/>
							<input
								required={true}
								label='name'
								type='text'
								validation={isValidName.toString()}
								value={lName}
								onChange={handleLnameChange}
							/>
						</div>
						<button
							className={`sui_btn ${isValidName ? "" : "sui_btn_disabled"}`}
							onClick={handleSaveName}>
							Save
						</button>
					</div>
				) : (
					<span className='user-label'>
						<h2>Name:</h2>
						<p>
							{firstName} {lastName}
						</p>
					</span>
				)}
			</div>
		</div>
	);
};
