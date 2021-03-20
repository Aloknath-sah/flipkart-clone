import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavbarWrapper = styled.div`
    overflow:hidden;
    position: fixed;
    background-color: blue;
    width:100%;
    top:0;
    height: 10%;
    display:flex;
    &.wrapper > *{
        flex:1;
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
        width: 100%
    }
`

const NavbarRight = styled.div`
    
    padding: 2%;
    display: flex;
    
    &.navright > * {
        text-decoration: none;
        color: white;
        padding: 0% 1% 1% 15%;
    }
    &.navright > * > * {
        color: white;
    }
`

class Navbar extends React.Component {
    
    render(){
        return (
            <NavbarWrapper className="wrapper">
            <NavbarLeft>
                
                    <Link to="/">
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" width="55%" />
                        
                    </Link>
                    <input/>
            </NavbarLeft>
            
            <NavbarRight className="navright" >
            <div>My Account</div>
                <div>More</div>
                <Link to="/cart" >
                
                <ShoppingCartIcon/>
                Cart
                </Link>
            </NavbarRight>
            </NavbarWrapper>
        );
    }
    
}

export default Navbar