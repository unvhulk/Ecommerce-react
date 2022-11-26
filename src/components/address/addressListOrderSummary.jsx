import React from "react";
import "./address.css";

export default function AddressListOrderSummary({
	id,
	address,
	selected = false,
	setSelectedAddress,
}) {
	return (
		<li
			className={`address-list-container ${selected ? "selected" : ""}`}
			key={id}
			onClick={() => {
				setSelectedAddress(address);
			}}>
			<div className='address_table'>
				<p>{address.mobile}</p>
				<p>{address.fullname}</p>
				<p>{address.address}</p>
				<p>
					{address.city}, {address.state} - {address.pincode}
				</p>
			</div>
		</li>
	);
}
