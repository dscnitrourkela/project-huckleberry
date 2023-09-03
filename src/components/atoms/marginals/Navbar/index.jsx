import { useState } from 'react';

import Link from 'next/link';

import Image from 'next/image';
import Logo from '@images/Logo.svg';
import { navigation } from '@/data/navigation';
import { SectionContainer, NavText } from '@/components/atoms/shared';

import { MenuButton, MobileNavList, Nav, NavList } from './styles';
import Button from '../../shared/Button';

const NavBar = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const toggleMenuIsOpen = () => (menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true));
	const navList = navigation.map((nav) => (
		<li className='nav-item' key={nav.title}>
			<Link className='nav-link' href={nav.link}>
				<NavText>{nav.title}</NavText>
			</Link>
		</li>
	));

	return (
		<div
			className='navbar'
			style={{
				backgroundColor: 'var(--background-primary)',
				position: 'sticky',
				top: '0',
			}}
		>
			<SectionContainer>
				<Nav>
					<div className='nav nav--left'>
						<Image src={Logo} alt='logo' className='logo' width={320} height={32} />
					</div>
					<NavList className='nav nav--center'>{navList}</NavList>
					<div className='nav nav--right'>
						{/* TODO :- IMPLEMENT DARK THEME */}
						<Button variant='primary' text='Join US' />
						{/* <ToggleModeIcon /> */}
						<div className='btn__container' onClick={toggleMenuIsOpen} role='button' tabIndex={0}>
							<MenuButton menuIsOpen={menuIsOpen}>
								<span className='menu_burger' />
							</MenuButton>
						</div>
					</div>
				</Nav>
			</SectionContainer>
			{menuIsOpen && <MobileNavList>{navList}</MobileNavList>}
		</div>
	);
};

export default NavBar;
