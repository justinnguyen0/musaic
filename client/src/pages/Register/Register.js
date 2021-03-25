import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import UserService from '../../services/user.service.js';

const GlobalStyle = createGlobalStyle`
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
    confirmpassword: '',
};

function Register() {
    const [state, setState] = useState(initalState);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Account created');
        console.log(state);

        for (let key in state) {
            if (key === 'email' && state[key] === '') {
                setError(`Please enter your email`)
                return
            }
            else if (key === 'password' && state[key] === '') {
                setError(`Please enter a password`)
                return
            }
            else if (key === 'confirmpassword' && state[key] === '') {
                setError("Please confirm your password")
                return
            }
        }
        if (state['confirmpassword'] !== state['password']) {
            setError("Passwords do not match")
            return
        }
      
      
        //Creates new user and sends html request to server - server then adds new user to mongoDB Atlas
        const studentObject = {
            email: state.email,
            password: state.password
          };    

        const res = UserService.registerNewUser(studentObject);
        console.log(res);
          /******************************************************************************************************** */
      
      
        setError('');
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
                <h2>Register an account</h2>

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

                <label htmlFor="confirmpassword">Confirm Password</label>
                <StyledInput
                    type="confirmpassword"
                    name="confirmpassword"
                    value={state.confirmpassword}
                    onChange={handleInput}
                />
                
                {error && (
                    <StyledError>
                    <p>{error}</p>
                    </StyledError>
                )}
                
                <StyledButton type="submit">Connect Spotify</StyledButton>
                </StyledForm>
        </StyledFormWrapper>
    </>
  );
}

export default Register
