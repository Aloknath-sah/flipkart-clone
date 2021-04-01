import React from 'react';
import {Badge, withStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import IconButton from '@material-ui/core/IconButton';
import { useSelector } from 'react-redux';
import { isAuth } from '../../Redux/Register/action';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 1,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const NavbarWrapper = styled.div`
    overflow:hidden;
    position: fixed;
    background-color: #2874f0;
    width:100%;
    top:0;
    height: 10%;
    display:flex;
    padding-right: 5%;
    &.wrapper > * {
        flex:1;
    }

    @media screen and (min-width: 300px) {
        height: 5%;
    }

    @media screen and (min-width: 480px) {
        height: 10%;
    }

    @media screen and (min-width: 600px) {
        height: 6%;
    }

    @media screen and (min-width: 930px) {
        height: 6%;
    }

    @media screen and (min-width: 1025px) {
        height: 11%;
    }
`

const NavbarLeft = styled.div`
    padding: 1% 0% 1% 2%;
    margin-left: 10%;
    display: flex;
    a {
        text-decoration: none;
        color: #007367;
    }
    input{
        width: 100%;
    }
    @media screen and (min-width: 300px) {
        margin-left: 0%;
        margin-top:2%;
        
        input{
            width: 100%;
            font-size: 10px;
            height: 95%;
            
        }
    }

    @media screen and (min-width: 480px) {
        margin-left: 0%;
        margin-top:0%;
        
        input{
            width: 100%;
            font-size: 10px;
            height: 95%;
            
            
        }
    }

    @media (max-width: 600px) {
        margin-left: 0%;
        margin-top:0%;
        input{
            width: 100%;
            font-size: 10px;
            height: 95%;
            
        }
    }
    @media (max-width: 930px) {
        margin-left: 0%;
        margin-top:0%;
        input{
            width: 100%;
            font-size: 20px;
            height: 95%;
            
        }
    }
    @media (max-width: 1025px) {
        margin-left: 0%;
        margin-top:0%;
        input{
            width: 100%;
            font-size: 25px;
            height: 90%;
            
        }
    }
`

const NavbarRight = styled.div`
    padding: 2%;
    display: flex;
    
    &.navright > * {
        text-decoration: none;
        color: white;
        padding: 0% 1% 2% 15%;
    }
    &.navright > * > * {
        color: white;
    }
    &.navright > .more{
        margin-left: 10%;
    }
`

const Navbar = () => {
    const isRegister = useSelector(state => state.register.isRegister)
    const cartLength = useSelector(state => state.product.cart).length
    const isAuthVal = useSelector(state => state.register.isAuthVal)
    let loginUser = useSelector(state => state.register.loginUser)
    loginUser = loginUser.split("@")
    const userName = loginUser[0]

    return (
        <NavbarWrapper className="wrapper">
            <NavbarLeft>
                <Link to="/">
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" width="55%" alt="logo" />
                </Link>
                <input placeholder="Search for products, brands and more"/>
            </NavbarLeft>
            
            <NavbarRight className="navright">
                <div>
                {
                    isAuthVal?<div>hello {userName}</div>:<Login/>
                }
                </div>
                {
                    isAuthVal?<></>:isRegister?<div></div>:<Register/>
                }
                
                <div className="more" >More</div>
                
                <Link to="/cart/cartData">
                <IconButton aria-label="cart" style={{marginTop:"-12px"}} >
                    <StyledBadge badgeContent={cartLength} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
                </Link>
                
            </NavbarRight>
        </NavbarWrapper>
    );
}

export default Navbar
