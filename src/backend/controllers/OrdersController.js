import { v4 as uuid } from "uuid";
import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * This handler handles getting items to user's order.
 * send GET Request at /api/user/order
 * */
export const getOrdersHandler = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	if (!userId) {
		new Response(
			404,
			{},
			{
				errors: ["The email you entered is not Registered. Not Found error"],
			}
		);
	}
	const orders = schema.users.findBy({ _id: userId }).orders;
	return new Response(200, {}, { orders: orders });
};

/**
 * This handler handles adding an order to user's orders.
 * send POST Request at /api/user/order
 * body contains {order}
 * */

export const addOrderToOrdersHandler = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	try {
		if (!userId) {
			new Response(
				404,
				{},
				{
					errors: ["The email you entered is not Registered. Not Found error"],
				}
			);
		}
		const orders = schema.users.findBy({ _id: userId }).orders;
		const order = JSON.parse(request.requestBody);
		orders.push({
			...order,
			createdAt: formatDate(),
			updatedAt: formatDate(),
			_id: uuid(),
		});
		this.db.users.update({ _id: userId }, { orders: orders, cart: [] });
		return new Response(201, {}, { orders: orders });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};
