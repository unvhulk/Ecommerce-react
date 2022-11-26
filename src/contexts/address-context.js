import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "../contexts";
import axios from "axios";

const AddressContext = createContext();

const useAddress = () => useContext(AddressContext);

function AddressProvider({ children }) {
	const [address, setAddress] = useState([]);
	const [processingAddress, setProcessingAddress] = useState(null);
	const { user, token } = useAuthContext();

	useEffect(() => {
		if (user) {
			setAddress(user.address);
		} else {
			setAddress([]);
		}
	}, [user]);

	const updateOrSaveAddress = async (id, newlyCreatedAddress) => {
		const method = id ? "put" : "post";
		setProcessingAddress(true);
		try {
			const response = await axios.request({
				method: method,
				url: "/api/user/address",
				headers: { authorization: token },
				data: { address: newlyCreatedAddress },
			});
			setAddress(response.data.address);
		} catch (err) {
			console.error(err);
		}
	};

	const deleteAddress = async (id) => {
		const url = `/api/user/address/${id}`;
		try {
			const response = await axios.request({
				method: "delete",
				url: url,
				headers: { authorization: token },
			});
			setAddress(response.data.address);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<AddressContext.Provider
			value={{
				address,
				processingAddress,
				updateOrSaveAddress,
				deleteAddress,
			}}>
			{children}
		</AddressContext.Provider>
	);
}

export { AddressProvider, useAddress };
