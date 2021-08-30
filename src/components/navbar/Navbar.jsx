/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarContainer from './styles';

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
      <h1 className="logo">
        Bookstore CMS
      </h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className="link"
              activeClassName="active-link"
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
