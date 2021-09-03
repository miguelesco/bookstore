/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarContainer, { Title, RightNav, LeftNav } from './styles';
import logo from '../../assets/images/userIcon.svg';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/category',
      text: 'CATEGORIES',
    },
  ];

  return (
    <NavbarContainer>
      <LeftNav>
        <Title>Bookstore CMS</Title>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </LeftNav>
      <RightNav>
        <img src={logo} alt="user icon" />
      </RightNav>
    </NavbarContainer>
  );
};

export default Navbar;
