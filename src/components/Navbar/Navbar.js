import React from 'react';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon } from './Navbar.elements';
import { FaBars, FaTimes } from 'react-icons/fa';




const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon/>
                    Drewbacca
                </NavLogo>
                <MobileIcon>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;
