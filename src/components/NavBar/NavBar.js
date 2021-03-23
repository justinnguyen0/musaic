import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavBarElements';

export default function NavBar() {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/home">Musaic</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/chat">Chat</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/friends">Friends</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/profile">Profile</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/register">Register</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login">Login</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}