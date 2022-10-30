import { makeStyles } from "@material-ui/core/styles";

 export default makeStyles((theme) => ({

    container: {
        paddingBlock: 30,
        display: "flex",
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },

    form:{
        width: '30rem',
        height: 'auto',
        marginBlock: 20,
        [theme.breakpoints.down('sm')]:{
            width: '14rem',
        },
    },

    searchBtn:{
        borderLeft: 'none',
        borderRadius: '0 5px 5px 0',
    },

    cardsContainer:{
        height: '79vh',
        padding: '1rem 2rem',
        display: 'flex',
        marginTop: 20,
        justifyContent: 'center',
        gap: 20,
        flexWrap: 'wrap',
        overflowY: 'auto'
    },

    cardsContainerHide:{
       display: 'none',
    },


 }));