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
        height: 430,
        width: 320,
        position: 'relative',
        // backgroundColor: "#252830",
        // color: "#eee",
      },

      rates:{
        marginTop: 35
      },

      link:{
        textDecoration: 'none',
        color: 'gray'
      },

      playBtn:{
        width: 35,
        height: 35,
        background: '#1FDF64',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      footer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
      }
 }))