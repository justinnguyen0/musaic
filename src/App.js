import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import Chat from './components/Chat/Chat';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';



function App() {

  return (
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
  );
}



export default App;
