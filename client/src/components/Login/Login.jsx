import React from 'react'
import { Box, Typography  } from '@material-ui/core';
import useStyles from './styles';

import SpotifyLogin from '../../images/spotify.png';

const CLIENT_ID = 'af83cfa546a24ae49a0bfb4856cfec53';
const SPOTIFY_AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const REDIRECT_URL = 'http://localhost:3000/search';
const SCOPES = ['user-top-read', 'user-read-email'];
const SCOPES_URL= SCOPES.join('%20');
const FINAL_URL = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL}&response_type=token&show_dialog=true`;

const Login = () => {

    const classes = useStyles();

    const handleLogin = () => {
      window.location = FINAL_URL;
    };
    
  return (
    <Box className={classes.container}>
        <Box className={classes.loginButton} onClick={handleLogin}>
          <Box className={classes.loginText}>
            <Typography variant='h6'>Login</Typography>
          </Box>
          <Box className={classes.logo}>
           <img src={SpotifyLogin} alt='spotify' style={{width: 30, height: 30}}/>
          </Box>
        </Box>
    </Box>
  )
}

export default Login