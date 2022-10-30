import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({

    container: {
        width: '100%',
        height: '100vh',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginButton:{
        width: '20rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid gray',
        borderRadius: 7,
        paddingBlock: '.7rem',
        cursor: 'pointer',
        transition: 'all 0.5s ease-in',
        '&:hover':{
            background: 'linear-gradient(to right, #00D95F, #eee)',
            transform: 'scale(1.05)',
        }
    }, 

    logo:{
        position: 'relative',
        right: '-30%'
    },

    loginText:{
        marginLeft: '30px',
        color: '#333'
    }

 }));