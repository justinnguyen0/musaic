import React from 'react';
import { AiOutlineHome, AiOutlinePlusCircle } from 'react-icons/ai';
import { FiUser, FiUsers } from 'react-icons/fi';
import { BsChatDots } from 'react-icons/bs'; 
import {
    Nav, 
    NavMenu, 
    NavLink,
} from './NavBarElements';

export default function NavBar() {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    Musaic
                    {/* <img src={require('../../images/logo.svg')} alt='logo'/> */}
                </NavLink>
                <NavMenu>
                    <NavLink to="/home" activeStyle={{color: '#ab936b'}}>
                        <AiOutlineHome />
                    </NavLink>
                    <NavLink to="/chat" activeStyle={{color: '#ab936b'}}>
                        <BsChatDots />
                    </NavLink>
                    <NavLink to="/friends" activeStyle={{color: '#ab936b'}}>
                        <FiUsers />
                    </NavLink>
                    <NavLink to="/profile" activeStyle={{color: '#ab936b'}}>
                        <FiUser />
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}