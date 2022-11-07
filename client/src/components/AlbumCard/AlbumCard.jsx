import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import useStyles from './styles';
import { Box } from '@material-ui/core';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const ArtistCard = ({album}) => {

    const classes = useStyles();
   const artistsName  = album.artists.map((name) => (name.name + '. '));

  return (
    <Card className={classes.card} sx={{borderRadius: 3,}}>
    <CardActionArea>
      <CardMedia
        onClick={() => {window.location.href = album?.external_urls?.spotify}}
        className={classes.media}
        component="img"
        image={album?.images[0]?.url}
        alt={album?.name}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {album.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {artistsName}
        </Typography>
        <Box style={{marginTop: 20}}>
        <Typography variant='body2' color="text.secondary">
            {album?.release_date}
        </Typography>
        <Typography variant='body2' color="text.secondary">
            {album?.total_tracks} tracks
        </Typography>
        </Box>
        <Box className={classes.footer}>
        <a href={album?.external_urls?.spotify} target='_blank' className={classes.link}>
            <div className={classes.playBtn}>
                <PlayArrowIcon style={{color: 'black'}}/>
            </div>
        </a>
        </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default ArtistCard