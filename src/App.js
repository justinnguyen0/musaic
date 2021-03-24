import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import Chat from './components/Chat/Chat';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import SpotifyWebApi from "spotify-web-api-js"
import { getTokenFromURL } from './spotify';

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenHash = getTokenFromURL();
    window.location.hash = "";

    const _token = tokenHash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log('USER >>>', user)
      })
    }

    console.log('TOKEN >>> ', _token);
  }, []);

  return (
    /*<div>
            {token ? (<h2><Profile /></h2>) : (<Login />)}
        </div>);*/
    <div className="App">
      {token ? (
      <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/chat">
              <Chat />
            </Route>
            <Route exact path="/friends">
              <Friends />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
      </BrowserRouter>
      ) :
      (<Login />)}
    </div>
  );
}



export default App;
