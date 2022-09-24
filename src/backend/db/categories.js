import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		rating: 4.5,
		title: "God of War",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661270743/Xero/X3WIAh63yKhRRiMohLoJMeQu_kmnb3r.jpg",
		author: "Santa Monica",
		price: 5000,
		categoryName: "Action",
	},
	{
		_id: uuid(),
		rating: 4.5,
		title: "Elden Ring",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661267658/Xero/elden-ring-button-03-1623460560664_cvv3gw.jpg",
		author: "FromSoftware",
		price: 5000,
		categoryName: "Adventure",
	},
	{
		_id: uuid(),
		rating: 4.5,
		title: "Dying Light",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661267604/Xero/91DgfqdUA5L._SL1500__vau6xf.jpg",
		author: "Techland",
		price: 3000,
		categoryName: "Horror",
	},
	{
		_id: uuid(),
		rating: 4.5,
		title: "The Stanley Parable",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661269949/Xero/eQVuMWucUXgz0WZpFyQVjFQc_hxaan7.jpg",
		author: "Davey Wreden and William Pugh",
		price: 3000,
		categoryName: "Puzzle",
	},
	{
		_id: uuid(),
		rating: 4.2,
		title: "The Witcher 3: Wild Hunt",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661269386/Xero/TQKAd8U6hnIFQIIcz6qnFh8C_w946na.jpg",
		author: "CD Projekt Red",
		price: 1000,
		categoryName: "RPG",
	},
];
