import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
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
		title: "GTA V",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661267418/Xero/gta-5-button-2021-1639777058682_bi9iu3.jpg",
		author: " Rockstar",
		price: 0,
		categoryName: "Action",
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
		rating: 4.0,
		title: "Counter Strike: Global Offensive",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661267636/Xero/counter-strike-global-offensive-button-1640896165989_brxyfi.jpg",
		author: "Valve",
		price: 1000,
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
		rating: 4.3,
		title: "Call of Duty: Modern Warfare",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661267793/Xero/xmKUnAOenEAKspB3FlOg80aQZfEoCYcE_y6lt5u.jpg",
		author: "Activision",
		price: 3000,
		categoryName: "Action",
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
	{
		_id: uuid(),
		rating: 3.5,
		title: "Stray",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661267851/Xero/stray-store-artwork-01-en-10jun22_cs3nda.jpg",
		author: "Annapurna Interactive",
		price: 5000,
		categoryName: "Adventure",
	},
	{
		_id: uuid(),
		rating: 3.8,
		title: "Horizon Zero Dawn",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661269369/Xero/vC7trMorHJgbImp8PCQvpI0p_eph7dx.jpg",
		author: "Guerilla Games",
		price: 3000,
		categoryName: "Adventure",
	},
	{
		_id: uuid(),
		rating: 4.0,
		title: "The Last of Us",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661267890/Xero/eEczyEMDd2BLa3dtkGJVE9Id_dvwilf.jpg",
		author: "Naughty Dog",
		price: 1000,
		categoryName: "Adventure",
	},
	{
		_id: uuid(),
		rating: 3.0,
		title: "Assasin's Creed Valhalla",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661267908/Xero/8XGEPtD1xoasK0FYkYNcCn1z_xaxein.jpg",
		author: "Ubisoft Montreal",
		price: 5000,
		categoryName: "Adventure",
	},
	{
		_id: uuid(),
		rating: 3.5,
		title: "Resident Evil 7: Biohazard",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661267927/Xero/cxd9vkFOAHVwwYG7lQKENGkrfyoAChNh_w9epnd.jpg",
		author: "Capcom",
		price: 1000,
		categoryName: "Horror",
	},
	{
		_id: uuid(),
		rating: 2.5,
		title: "Outlast",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661267951/Xero/71zVua2yMNL._SL1500__lgeoi3.jpg",
		author: "Red Barrels",
		price: 5000,
		categoryName: "Horror",
	},
	{
		_id: uuid(),
		rating: 3.0,
		title: "Alien: Isolation",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661267992/Xero/EGS_AlienIsolation_CreativeAssembly_S6-1200x1600-af00adc8f67a7c6138cce183ac1e9503_v3to4c.jpg",
		author: "Creative Assembly",
		price: 3000,
		categoryName: "Horror",
	},
	{
		_id: uuid(),
		rating: 2.0,
		title: "Dead Space",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661268044/Xero/dead-space-remake-is-launching-early-2023-1647027908392_mtters.jpg",
		author: "EA",
		price: 5000,
		categoryName: "Horror",
	},
	{
		_id: uuid(),
		rating: 2.5,
		title: "Amnesia: The Dark Descent",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661269712/Xero/amnesia-1639516050762_bti6en.jpg",
		author: "Frictional Games",
		price: 3000,
		categoryName: "Horror",
	},
	{
		_id: uuid(),
		rating: 4.0,
		title: "Carrion",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661269751/Xero/H2x1_NSwitchDS_Carrion_image1600w_mnt9q2.jpg",
		author: "Phobia Games Studio",
		price: 1000,
		categoryName: "Horror",
	},
	{
		_id: uuid(),
		rating: 3.5,
		title: "Portal 2",
		image:
			"https://res.cloudinary.com/dark-ether/image/upload/c_scale,h_200,w_160/v1661269900/Xero/portal2-1638924084230_vpqr6a.jpg",
		author: "Valve",
		price: 5000,
		categoryName: "Puzzle",
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
];
