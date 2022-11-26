import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		logo: "https://res.cloudinary.com/dark-ether/image/upload/v1669052215/Xero/Categories/swords_r4dhfn.svg",
		rating: 4.5,
		title: "God of War",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/v1669052215/Xero/Categories/swords_r4dhfn.svg",
		author: "Santa Monica",
		price: 5000,
		categoryName: "Action",
	},
	{
		_id: uuid(),
		logo: "",
		rating: 4.5,
		title: "Elden Ring",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/v1669052191/Xero/Categories/map_fcbuye.svg",
		author: "FromSoftware",
		price: 5000,
		categoryName: "Adventure",
	},
	{
		_id: uuid(),
		logo: "",
		rating: 4.5,
		title: "Dying Light",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/v1669052212/Xero/Categories/skull_ssq7xj.svg",
		author: "Techland",
		price: 3000,
		categoryName: "Horror",
	},
	{
		_id: uuid(),
		logo: "",
		rating: 4.5,
		title: "The Stanley Parable",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/v1669052200/Xero/Categories/puzzle_uqn9d1.svg",
		author: "Davey Wreden and William Pugh",
		price: 3000,
		categoryName: "Puzzle",
	},
	{
		_id: uuid(),
		logo: "",
		rating: 4.2,
		title: "The Witcher 3: Wild Hunt",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/v1669052208/Xero/Categories/shuriken_cwfogl.svg",
		author: "CD Projekt Red",
		price: 1000,
		categoryName: "RPG",
	},
];
