import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({
    media: {
        height: 250,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 5,
        height: 400,
        width: 320,
        position: 'relative',
        // backgroundColor: "#252830",
        // color: "#eee",
      },

      rates:{
        marginTop: 35
      }
 }))