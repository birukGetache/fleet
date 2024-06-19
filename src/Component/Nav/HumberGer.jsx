// src/components/NavBar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCar, faSun, faMoon, faGlobe } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
  position: relative;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
    display: ${props => (props.open ? 'flex' : 'none')};
  }
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: #ddd;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ThemeIcon = styled.div`
  cursor: pointer;
  margin-left: 1rem;
`;

const LanguageIcon = styled.div`
  cursor: pointer;
  margin-left: 1rem;
  position: relative;
`;

const LanguageMenu = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${props => (props.show ? 'block' : 'none')};
  z-index: 1;

  & > div {
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Implement your theme toggle logic here
  };

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  const changeLanguage = (language) => {
    // Implement your language change logic here
    console.log('Language changed to:', language);
    setShowLanguageMenu(false);
  };

  return (
    <Nav>
      <NavLeft>
        <FontAwesomeIcon icon={faCar} />
        <span>Fleet Management System</span>
      </NavLeft>
      <NavItems open={isOpen}>
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#services">Services</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </NavItems>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <MenuIcon onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </MenuIcon>
        <ThemeIcon onClick={toggleTheme}>
          <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
        </ThemeIcon>
        <LanguageIcon onClick={toggleLanguageMenu}>
          <FontAwesomeIcon icon={faGlobe} />
          <LanguageMenu show={showLanguageMenu}>
            <div onClick={() => changeLanguage('English')}>English</div>
            <div onClick={() => changeLanguage('Amharic')}>Amharic</div>
          </LanguageMenu>
        </LanguageIcon>
      </div>
    </Nav>
  );
};

export default NavBar;
