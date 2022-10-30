import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useStyles from './styles';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';



import Logout from '../Logout/Logout';
import ArtistCard from '../ArtistCard/ArtistCard';



const Search = () => {
    
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState(window.localStorage.getItem('lastSearchValue') || '');
    const [artists, setArtists] = useState([]);


    const token =  window.localStorage.getItem('accessToken');

    const handleSearch = async () => {

      if(searchValue !== ''){
        const { data } = await axios.get(`https://api.spotify.com/v1/search?q=${searchValue}&type=artist`,{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        
    })

    setArtists(data.artists.items)
    localStorage.setItem("lastSearchValue", searchValue);
      }
  
           
    }

    useEffect(() => {
      handleSearch();
    })

  return (
   
     <Box component="form" noValidate autoComplete="off" className={classes.container} 
     style={searchValue === '' ? {marginTop: '14rem'} : {margin: 0}}>
      <Box style={{display: 'flex', alignItems: 'center',}}>
      <FormControl className={classes.form}>
        <OutlinedInput
        sx={{borderRadius: 3,}}
        type='text'
        placeholder="Search for an artist..." 
        endAdornment={
            <InputAdornment position="end">
                <IconButton edge="end" onClick={handleSearch}>
                  <SearchIcon sx={{color: '#BFBFBF'}}/>
                </IconButton>
            </InputAdornment>
        } 
        className={classes.input}
        value={searchValue}
        onChange={(e) => {
            setSearchValue(e.target.value)
            // handleSearch()
        }}
        onKeyPress = {(e) =>{ if(e.key === 'Enter') handleSearch()}}
         />
      </FormControl>
      <Logout/>
      </Box>
     

      {
        searchValue && (
          <Box className={classes.cardsContainer}>
      {
        artists && artists.map((artist,i) => {
            return (
                <ArtistCard artist={artist} key={i}/>
            )
        })
      }
      </Box>
        )
      }
     
    </Box>
 
  )
}

export default Search