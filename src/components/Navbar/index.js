import React from 'react';
import {FaBars} from 'react-icons/fa';
import moses from '../../images/moses-logo.png'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavImg} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                <NavImg src={moses} alt='moses'/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars/>
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to="about">About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="outcome">Outcome</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="course">Course</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="contact">Contact us</NavLinks>
                  </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar
// 2:25:10