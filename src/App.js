import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Friends from './pages/Friends/Friends';
import Chat from './pages/Chat/Chat';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import SpotifyWebApi from "spotify-web-api-js"
import { getTokenFromURL } from './spotify';

const spotify = new SpotifyWebApi();

//todo: landing page

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
