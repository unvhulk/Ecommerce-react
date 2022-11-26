import React from "react";
import { useAddress } from "../../contexts";
import "./address.css";

export default function AddressList({
	id,
	address,
	setNewAddress,
	setIsAddNewAddress,
}) {
	const { deleteAddress } = useAddress();

	const handleDeleteAddress = () => {
		deleteAddress(id);
	};

	const handleEditAddress = () => {
		setIsAddNewAddress(true);
		setNewAddress(address);
	};

	return (
		<li className='address-list-wrapper' key={id}>
			<div className='address-list-header'>
				<button className='' onClick={handleEditAddress}>
					Edit
				</button>
				<button className='' onClick={handleDeleteAddress}>
					Delete
				</button>
			</div>
			<table className='address_table'>
				<tbody>
					<tr>
						<td className='address_title'>Full Name:</td>
						<td>{address.fullname}</td>
					</tr>
					<tr>
						<td className='address_title'>Mobile:</td>
						<td>{address.mobile}</td>
					</tr>
					<tr>
						<td className='address_title'>Pincode:</td>
						<td>{address.pincode}</td>
					</tr>
					<tr>
						<td className='address_title'>Address:</td>
						<td>{address.address}</td>
					</tr>
					<tr>
						<td className='address_title'>City:</td>
						<td>{address.city}</td>
					</tr>
					<tr>
						<td className='address_title'>State:</td>
						<td>{address.state}</td>
					</tr>
				</tbody>
			</table>
		</li>
	);
}
