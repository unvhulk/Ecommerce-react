import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./address.css";
import { useAddress } from "../../contexts";

export default function Address({
	newAddress,
	setNewAddress,
	setIsAddNewAddress,
}) {
	const emptyAddress = {
		fullname: "",
		mobile: "",
		pincode: "",
		address: "",
		city: "",
		state: "",
	};

	const dummyAddress = {
		fullname: "Dark Aether",
		mobile: "9999999999",
		pincode: "800899",
		address: "84, Pole Star, Abyss",
		city: "Flux",
		state: "Quantum Fields",
	};

	const [valid, setValid] = useState(false);

	const { updateOrSaveAddress } = useAddress();

	useEffect(() => {
		if (
			newAddress.fullname.length > 1 &&
			newAddress.mobile.length > 1 &&
			newAddress.pincode.length > 1 &&
			newAddress.address.length > 1 &&
			newAddress.address.length > 1 &&
			newAddress.city.length > 1 &&
			newAddress.state.length > 1
		) {
			setValid(true);
		} else {
			setValid(false);
		}
	}, [newAddress]);

	const handleAddress = () => {
		const newlyCreatedAddress = {
			_id: newAddress._id ?? uuid(),
			fullname: newAddress.fullname,
			mobile: newAddress.mobile,
			pincode: newAddress.pincode,
			address: newAddress.address,
			city: newAddress.city,
			state: newAddress.state,
		};
		updateOrSaveAddress(newAddress._id, newlyCreatedAddress);
		setNewAddress(emptyAddress);
		setIsAddNewAddress(false);
	};

	const handleDummyAddress = () => {
		setNewAddress(dummyAddress);
	};

	const handleCancelAddress = () => {
		setIsAddNewAddress(false);
		setNewAddress(emptyAddress);
	};

	return (
		<div className='add-address-wrapper'>
			<input
				placeholder='Full name'
				validation={`${newAddress.fullname.length > 1}`}
				type='text'
				value={newAddress.fullname}
				onChange={(e) =>
					setNewAddress((add) => ({ ...add, fullname: e.target.value }))
				}
			/>
			<input
				placeholder='Mobile number'
				validation={`${newAddress.mobile.length > 1}`}
				type='text'
				value={newAddress.mobile}
				onChange={(e) =>
					setNewAddress((add) => ({ ...add, mobile: e.target.value }))
				}
			/>
			<input
				placeholder='Pincode'
				validation={`${newAddress.pincode.length > 1}`}
				type='text'
				value={newAddress.pincode}
				onChange={(e) =>
					setNewAddress((add) => ({ ...add, pincode: e.target.value }))
				}
			/>
			<input
				placeholder='Address'
				validation={`${newAddress.address.length > 1}`}
				type='text'
				value={newAddress.address}
				onChange={(e) =>
					setNewAddress((add) => ({ ...add, address: e.target.value }))
				}
			/>
			<input
				placeholder='Town/City'
				validation={`${newAddress.city.length > 1}`}
				type='text'
				value={newAddress.city}
				onChange={(e) =>
					setNewAddress((add) => ({ ...add, city: e.target.value }))
				}
			/>
			<input
				placeholder='State'
				validation={`${newAddress.state.length > 1}`}
				type='text'
				value={newAddress.state}
				onChange={(e) =>
					setNewAddress((add) => ({ ...add, state: e.target.value }))
				}
			/>
			<div className='address-btn-container'>
				<button
					className={`address-primary ${valid ? "" : "disabled"}`}
					onClick={handleAddress}>
					{newAddress._id ? "Update Address" : "Save Address"}
				</button>
				{newAddress._id && (
					<button
						className='address-primary btn_v1'
						onClick={handleCancelAddress}>
						Cancel
					</button>
				)}
			</div>
			{!valid && (
				<button className='dummy-btn' onClick={handleDummyAddress}>
					Add Dummy Address
				</button>
			)}
		</div>
	);
}
