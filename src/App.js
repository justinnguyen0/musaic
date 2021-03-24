import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import logo from './images/logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Friends from './pages/Friends/Friends';
import Chat from './pages/Chat/Chat';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';

//todo: landing page

function App() {

  return (
    
    <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/friends" component={Friends} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
   
  );
}



export default App;
