import axios from "axios";

export const utils = {
	getProducts() {
		return axios.get("/api/products");
	},
};
