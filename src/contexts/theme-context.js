import { useContext, createContext, useState } from "react";

const ThemeContext = createContext({ theme: "dark" });

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");
	const toggleTheme = () => {
		// console.log(theme);
		setTheme((theme) => {
			if (theme === "dark") {
				document.documentElement.setAttribute("data-theme", "light");
				return "light";
			} else {
				document.documentElement.setAttribute("data-theme", "dark");
				return "dark";
			}
		});
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
