import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Friends from './pages/Friends/Friends';
import Chat from './pages/Chat/Chat';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
//import SpotifyWebApi from "spotify-web-api-js"
//import { getTokenFromURL } from './spotify';

//const spotify = new SpotifyWebApi();

//todo: landing page

function App() {
/*
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
*/
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <div>
            <NavBar />
            <Route exact path="/home" component={Home} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/resetpassword" component={ResetPassword} />
            {/*token ? (<Route component={Home} />) : (<Route component={Login} />)*/}
          </div>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}



export default App;

