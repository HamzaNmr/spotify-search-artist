import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Album from './components/Album/Album';

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split('&');
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
  const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp;
};

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getReturnedParamsFromSpotifyAuth(window.location.hash);
      setToken(access_token);

      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);

    }

  });



  token ? <Navigate to={'/search'} /> : <Navigate to='/login'/>;

  return (
    // <div className="App">
    //   {token ? <Search/> : <Login/>}
    // </div>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login"/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/album/:id" element={<Album/>} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
