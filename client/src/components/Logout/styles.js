import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({
    logoutBtn:{
        position: 'relative',
        right: '-1rem',
        backgroundColor: '#00D95F',
        borderRadius: 7,
        width: 40,
        height: 52,
        '&:hover':{
            backgroundColor: '#ED5E68'
        },
        
    }
 }));