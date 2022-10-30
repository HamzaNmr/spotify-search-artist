import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AlbumCard from '../AlbumCard/AlbumCard';

import { useParams } from 'react-router-dom';

import useStyles from './styles.js';


const Album = () => {
    
    const classes = useStyles();
    const { id } = useParams();
    const [albums,setAlbums] = useState([]);
    const token =  window.localStorage.getItem('accessToken');

    const getAlbums = async() => {
        const { data } = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`,{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
    })

    setAlbums(data?.items)
    };

    useEffect(() => {
        getAlbums();
    })

    const artistsName = window.localStorage.getItem('artistsName');

  return (
    <div>
        <div className={classes.title}>
        <Typography variant='h4'>{artistsName}</Typography>
        <Typography variant='h6'>Albums</Typography>
        </div>
        <div className={classes.container}>
        {
             albums.map((album,i) => {
                return(
                    <AlbumCard album={album} key={i}/>
                )
            })
        }
    </div>
    </div>
  )
}

export default Album