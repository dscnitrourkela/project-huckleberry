import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
	primaryBackGround: '#f7f7f7',
	secondaryBackGround: '#abadaf',
	primaryTextColor: '#000000',
	secondaryTextColor: '#5339c4',
	tertiaryTextColor: '#bf4b7b',
};

export const darkTheme = {
	primaryBackGround: '#000000',
	secondaryBackGround: '#181818',
	primaryTextColor: '#abadaf',
	secondaryTextColor: '#f2f5f7',
	tertiaryTextColor: '#ffffff',
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --background-primary: ${({ theme }) => theme.primaryBackGround};
    --background-secondary: ${({ theme }) => theme.secondaryBackGround};
    --text-color-primary: ${({ theme }) => theme.primaryTextColor};
    --text-color-secondary: ${({ theme }) => theme.secondaryTextColor};
    --text-color-tertiary: ${({ theme }) => theme.tertiaryTextColor};
  }

  body {
    background-color: var(--background-primary);
    color: var(--text-color-primary);
    font-family: var(--font-family);
  }
`;
