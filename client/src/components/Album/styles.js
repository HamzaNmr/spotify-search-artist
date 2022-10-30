import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({
   container:{
    width: '100%',
    display: 'flex',
    marginTop: 20,
    justifyContent: 'center',
    gap: 20,
    flexWrap: 'wrap',
    overflowY: 'auto',
    paddingBottom: 30,
   },

   title: {
   padding: '1rem 6rem',
   [theme.breakpoints.down('md')]:{
    padding: '1rem'
   },
   [theme.breakpoints.down('md')]:{
    padding: '1rem 3rem'
   }
   }
 }))