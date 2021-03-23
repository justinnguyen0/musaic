import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Encode Sans Expanded;
    background: #fcf2d1;;
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
`;

const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
    font-size: 0.9rem;
    display: block;
    width: 100%;
    ${sharedStyles}
`;

const StyledButton = styled.button`
    display: block;
    background-color: #f7797d;
    color: #fff;
    font-size: 0.9rem;
    border: 0;
    border-radius: 10px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
`;

const StyledError = styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 40px 0;
`;

const initalState = {
    email: '',
    password: '',
};

function Login() {
    const [state, setState] = useState(initalState);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        //validate email and password
        //redirect to homepages
        setError('');
        alert('Testing: see comments in handlesubmit')
        console.log("Success")
    };

    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState(prev => ({ ...prev, [inputName]: value }));
    };

  return (
    <>
        <GlobalStyle />
        <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit}>
                <h2>Login</h2>

                <label htmlFor="email">Email</label>
                <StyledInput
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleInput}
                />

                <label htmlFor="password">Password</label>
                <StyledInput
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleInput}
                />
                <h5><a href="http://localhost:3000/register">Forgot your password?</a></h5>
                
                {error && (
                    <StyledError>
                    <p>{error}</p>
                    </StyledError>
                )}
                
                <StyledButton onClick={handleSubmit} type="submit">Login</StyledButton>
                </StyledForm>
        </StyledFormWrapper>
    </>
  );
}

export default Login
