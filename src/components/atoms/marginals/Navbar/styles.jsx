import styled, { keyframes } from 'styled-components';

const fadeDown = keyframes`
    0% {
        transform: translateY(-10px);
        opacity: .3;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const MobileNavList = styled.ul`
	position: absolute;
	width: 100%;
	background-color: var(--background-primary);
	height: 50vh;
	display: flex;
	padding: 12px 34px;
	flex-direction: column;
	align-items: stretch;
	justify-content: center;
	list-style: none;
	animation: ${fadeDown} 1s cubic-bezier(0.16, 1, 0.3, 1);
	flex: 1;

	.nav-link {
		text-decoration: none;
		color: var(--text-primary-color);
	}

	.nav-item {
		padding: 16px;
		border-bottom: 0.4px solid rgba(163, 163, 163, 1);
	}

	*:last-child {
		border: none;
	}

	@media (min-width: 850px) {
		display: none;
	}
`;

export const Nav = styled.nav`
	padding: 1.5em 0;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.nav--right {
		display: flex;
		gap: 1em;
	}

	.nav--center {
		flex: 1;
		margin: 0;
	}

	@media (max-width: 850px) {
		.nav--center {
			display: none;
		}

		.hamburger--menu {
			display: block;
		}

		.nav--left {
			width: 50%;
		}
	}
`;

export const NavList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.2em;
	font-size: 1.2em;

	.nav-link {
		text-decoration: none;
		color: var(--text-primary-color);
	}
`;

export const MenuButton = styled.button`
	position: relative;
	padding: 0;
	margin: 0;
	background-color: inherit;
	border: none;

	.menu_burger {
		display: block;
		position: relative;
	}

	.menu_burger,
	.menu_burger::before,
	.menu_burger::after {
		height: 2px;
		width: 25px;
		background-color: var(--text-color-secondary);
		transition: all 400ms ease-in-out;
	}

	.menu_burger::before,
	.menu_burger::after {
		content: '';
		position: absolute;
		width: 15px;
	}

	.menu_burger {
		transform: ${({ menuIsOpen }) => (menuIsOpen ? 'rotate(-45deg)' : 'rotate(0)')};
	}

	.menu_burger::before {
		bottom: ${({ menuIsOpen }) => (menuIsOpen ? '250%' : '400%')};
		left: 0;
		transform: ${({ menuIsOpen }) => (menuIsOpen ? 'rotate(90deg) translate(0px, -275%)' : 'rotate(0deg)')};
	}

	.menu_burger::after {
		top: ${({ menuIsOpen }) => (menuIsOpen ? '250%' : '400%')};
		right: 0;
		transform: ${({ menuIsOpen }) => (menuIsOpen ? 'rotate(90deg) translate(0px, 250%)' : 'rotate(0deg)')};
	}

	@media (min-width: 680px) {
		.menu_burger,
		.menu_burger::before,
		.menu_burger::after {
			height: 3px;
		}

		.menu_burger {
			width: 37.5px;
		}

		.menu_burger::before,
		.menu_burger::after {
			width: 22.5px;
		}

		@media (min-width: 850px) {
			display: none;
		}
	}
`;
