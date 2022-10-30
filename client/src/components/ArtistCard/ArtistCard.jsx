import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';

import useStyles from './styles';

const ArtistCard = ({artist}) => {

    const navigate = useNavigate();
    

    // const  external_urls = artist.external_urls;

    const handleAlbums =  () => {
        navigate(`/album/${artist.id}`)
        localStorage.setItem("artistsName", artist.name );
    }

    const classes = useStyles();

  return (
    <Card className={classes.card} onClick={handleAlbums} sx={{borderRadius: 3,}}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        component="img"
        image={artist?.images[0]?.url}
        alt={artist?.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {artist?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {artist?.followers?.total} followers
        </Typography>
        <Rating name="read-only" value={((artist?.popularity * 5) / 100).toFixed(0)} readOnly  className={classes.rates}/>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default ArtistCard