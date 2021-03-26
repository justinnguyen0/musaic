import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import UserService from '../../services/user.service.js';
//import  { loginURL }  from '../../spotify';

import {
    GlobalStyle,
    sharedStyles,
    StyledFormWrapper,
    StyledForm,
    StyledInput,
    StyledButton,
    StyledError
} from './LoginElements';


const initialState = {
    email: '',
    password: '',
};

var correctLogin;

export default function Login() {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
      
      
        const res = UserService.findPassByEmail(state.email).then(function(result){
            if(result.data.password === state.password)
            {
                correctLogin = true;
            }else{
                correctLogin = false;
            }


      
            //validate email and password
            //redirect to homepages
            setError('');
    
            console.log("Success")

        });

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
                <h2 style={{color: 'white', paddingBottom: '50px'}}>Musaic</h2>

                <label style={{color: 'white'}} htmlFor="email">Email address</label>
                <StyledInput
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleInput}
                />

                <label style={{color: 'white'}} htmlFor="password">Password</label>
                <StyledInput
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleInput}
                />
                <h5 style={{paddingBottom: '20px'}}><a style={{color: 'white'}} href="http://localhost:3000/register">Forgot your password?</a></h5>
                
                {error && (
                    <StyledError>
                    <p>{error}</p>
                    </StyledError>
                )}
                
                <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}><StyledButton onClick={handleSubmit} type="submit">Login</StyledButton></div>
                {/*<a href={loginURL} style={{textDecoration: 'none'}}><StyledButton type="button">Login with Spotify</StyledButton></a>*/}
            </StyledForm>
        </StyledFormWrapper>
    </>
  );
}

