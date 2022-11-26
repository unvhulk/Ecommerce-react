import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import { App } from "App";
import {
	CartProvider,
	ThemeProvider,
	AuthProvider,
	SearchProvider,
} from "contexts";

import { BrowserRouter } from "react-router-dom";
import { makeServer } from "server";
import { WishlistProvider } from "contexts/wishlist-context";
import { FilterProvider } from "contexts/filter-context";
import { ScrollToTop } from "components";
import { AddressProvider } from "contexts/address-context";
import { OrdersProvider } from "contexts/order-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
makeServer();
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<ThemeProvider>
					<WishlistProvider>
						<CartProvider>
							<AddressProvider>
								<OrdersProvider>
									<FilterProvider>
										<SearchProvider>
											<ScrollToTop />
											<App />
										</SearchProvider>
									</FilterProvider>
								</OrdersProvider>
							</AddressProvider>
						</CartProvider>
					</WishlistProvider>
				</ThemeProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
