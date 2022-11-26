import React, { useState } from "react";
import Address from "./address";
import AddressList from "./addressList";
import { useAddress } from "../../contexts";
import "./address.css";

export function AddressManagement() {
	const [isAddNewAddress, setIsAddNewAddress] = useState(false);

	const [newAddress, setNewAddress] = useState({
		fullname: "",
		mobile: "",
		pincode: "",
		address: "",
		city: "",
		state: "",
	});

	const { address } = useAddress();

	const handleAddNewAddress = () => {
		setIsAddNewAddress((prev) => !prev);
	};

	return (
		<div className='address-management-container'>
			<button className='add-address-btn' onClick={handleAddNewAddress}>
				+ Add New Address
			</button>

			<ul className='address-list-grid'>
				{address?.map((add) => (
					<AddressList
						key={add._id}
						id={add._id}
						address={add}
						setNewAddress={setNewAddress}
						setIsAddNewAddress={setIsAddNewAddress}
					/>
				))}
			</ul>
			<div
				className={`add-address-dialog ${!isAddNewAddress && "hide-address"}`}>
				<h2>Add new address</h2>
				<Address
					newAddress={newAddress}
					setNewAddress={setNewAddress}
					setIsAddNewAddress={setIsAddNewAddress}
				/>
			</div>
		</div>
	);
}
