const { createContext, useContext, useState } = require("react");

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
	const [searchText, setSearchText] = useState("");
	return (
		<SearchContext.Provider value={{ searchText, setSearchText }}>
			{children}
		</SearchContext.Provider>
	);
};

const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };
