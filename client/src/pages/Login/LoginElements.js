import styled, { createGlobalStyle, css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Encode Sans Expanded;
    background: #181b64;
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

export const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
`;

export const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #181b64;
    border-radius: 10px;
    box-sizing: border-box;
    //box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
    font-size: 0.9rem;
    display: block;
    width: 100%;
    ${sharedStyles}
`;

export const StyledButton = styled.button`
    display: block;
    background-color: #ab936b;
    color: #fff;
    font-size: 0.9rem;
    border: 0;
    border-radius: 50px;
    height: 40px;
    padding: 0px 50px;
    cursor: pointer;
    box-sizing: border-box;
`;

export const StyledError = styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 40px 0;
`;