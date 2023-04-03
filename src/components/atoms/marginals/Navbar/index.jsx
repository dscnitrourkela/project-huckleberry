import { useState } from 'react';

import Link from 'next/link';

import { navigation } from '@/assets/placeholders/navigation';
import { Container, ToggleModeIcon } from '@/components/atoms/shared';

import { MenuButton, MobileNavList, Nav, NavList } from './styles';

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuIsOpen = () => (menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true));
  const navList = navigation.map((nav) => (
    <li className='nav-item' key={nav.title}>
      <Link className='nav-link' href={nav.link}>
        {nav.title}
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
      <Container>
        <Nav>
          <div className='nav nav--left'>
            <h1>DSC NIT Rourkela</h1>
          </div>
          <NavList className='nav nav--center'>{navList}</NavList>
          <div className='nav nav--right'>
            <ToggleModeIcon />
            <div className='btn__container' onClick={toggleMenuIsOpen} role='button' tabIndex={0}>
              <MenuButton menuIsOpen={menuIsOpen}>
                <span className='menu_burger' />
              </MenuButton>
            </div>
          </div>
        </Nav>
      </Container>
      {menuIsOpen && <MobileNavList>{navList}</MobileNavList>}
    </div>
  );
};

export default NavBar;
