import { createContext, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { darkTheme, GlobalStyles, lightTheme } from '@/config/theme';

export const ThemeContext = createContext({
	isDarkMode: false,
	handleToggle: () => null,
});

const CustomThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const handleToggle = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, handleToggle }}>
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<GlobalStyles />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default CustomThemeProvider;
