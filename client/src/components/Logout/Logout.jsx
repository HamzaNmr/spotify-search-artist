import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@material-ui/core';
import useStyles from './styles';
import LogoutIcon from '@mui/icons-material/Logout';

const Logout = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/', { replace: true });
        localStorage.clear();
    }

  return (
    <Button className={classes.logoutBtn}  onClick={handleLogout}>
        <LogoutIcon style={{color: '#333'}}/>
    </Button>
  )
}

export default Logout