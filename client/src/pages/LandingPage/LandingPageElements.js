import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const LandingPageBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 250px;
    background-color: #181b64;
    height: 100vh;
`;

export const LandingPageBtn = styled.nav`
    display: flex;
    align-items: center;
`;

export const LandingPageBtnLink = styled(Link)`
    border-radius: 50px;
    background: #ab936b;
    white-space: nowrap;
    color: white;
    padding: 10px 22px;
    text-decoration: none;
`;