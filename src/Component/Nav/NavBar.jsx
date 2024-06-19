// src/components/NavBar.js
import React from 'react';
import styled from '@emotion/styled';
import { space, layout, color, typography, flexbox } from 'styled-system';

const Nav = styled('nav')(
  space,
  layout,
  color,
  typography,
  flexbox,
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#333',
  }
);

const NavItem = styled('a')(
  space,
  color,
  typography,
  {
    color: 'white',
    textDecoration: 'none',
    margin: '0 1rem',
    fontSize: '1rem',

    '&:hover': {
      color: '#ddd',
    }
  }
);

const NavBar = () => (
  <Nav>
    <NavItem href="#home">Home</NavItem>
    <NavItem href="#about">About</NavItem>
    <NavItem href="#services">Services</NavItem>
    <NavItem href="#contact">Contact</NavItem>
  </Nav>
);

export default NavBar;
