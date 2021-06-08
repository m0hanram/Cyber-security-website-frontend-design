import React from 'react';


import {
    Nav,
    NavbarContainer,
    NavLogo
} from './NavbarElements';


function Navbar({toggle}) {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">thinkgroupy</NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;
