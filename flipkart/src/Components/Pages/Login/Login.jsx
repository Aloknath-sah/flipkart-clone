import React, { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { isAuth, loginUser } from '../../../Redux/Register/action';
import styles from './Login.module.css'

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: '50%',
        display:"flex",
        backgroundColor:"white",
        margin:"0% 0% 0 0%"
    },
    login:{
        backgroundColor:"#2874f0",
        color:"white",
        width:"50%",
        padding:"4%"
    },
    text: {
        padding:"4%",
        '& > *':{
            padding:"2% 0 2% 0",
            width:"100%"
        }
    },
    btn:{
        backgroundColor:"#ff3d00",
        border:"none",
        width:"100%",
        padding:"3%",
        color:"white",
        marginBottom:"100px"
    },
    height:{
        margin:"40% 0 0 0",
        color:"#2874f0"
    },
    font:{
        fontSize:"13px"
    },
    big:{
        fontSize:"28px"
    }
}));

const Login = () => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const userData = useSelector(state => state.register.data)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch()
    const handleLogin = (userData) => {
        const checkUser = userData.find((item) => item.email === email)
        if(checkUser){
            console.log(checkUser)
            dispatch(isAuth(true))
            dispatch(loginUser(email))
        }
        else{
            dispatch(isAuth(false))
            setMessage("invalid User")
        }
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className={classes.login}>
                <p className={classes.big} >Login</p>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className={classes.text}>
                <TextField id="standard-basic" value={email} onChange={(e) => setEmail(e.target.value)} label="Enter Email/Mobile number" />

                <TextField id="standard-basic" value={password} onChange={(e)=> setPassword(e.target.value)}  label="Enter password" />

                <p className={classes.font} >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                <button className={classes.btn} onClick={() => handleLogin(userData)}>Login</button>
                <div style={{color:"red"}}>{message} </div>
            </div>
        </div>
    );
    return (
        <div>
            <button type="button" onClick={handleOpen} className={styles.login} style={{color:"#2874f0"}}>
                Login
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default Login;
