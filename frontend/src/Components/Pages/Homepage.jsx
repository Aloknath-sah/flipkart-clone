import { Grid } from '@material-ui/core';
import React from 'react';
import BootstrapCarousel from '../Layout/BootstrapCarousel ';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';

const Homepage = () => {
    return (
        <>
        <Navbar/>
        <div style={{height:"1200px", marginTop:"6%"}}>

            <BootstrapCarousel></BootstrapCarousel>
            <Grid container>
            <Grid item style={{padding:"2%"}}>
                <img src="https://rukminim1.flixcart.com/image/312/312/screwdriver/r/g/a/6036-jackly-original-imaesapqfk9qfysc.jpeg?q=70" width="50%" alt="" />
                <div>Screw diver set</div>
                <div>3.6</div>
                <div>₹148</div>
            </Grid>
            <div style={{padding:"2%"}}>
                <img src="https://rukminim1.flixcart.com/image/312/312/screwdriver/r/g/a/6036-jackly-original-imaesapqfk9qfysc.jpeg?q=70" width="50%" alt="" />
                <div>Screw diver set</div>
                <div>3.6</div>
                <div>₹148</div>
            </div>
            <div style={{padding:"2%"}}>
                <img src="https://rukminim1.flixcart.com/image/312/312/screwdriver/r/g/a/6036-jackly-original-imaesapqfk9qfysc.jpeg?q=70" width="50%" alt="" />
                <div>Screw diver set</div>
                <div>3.6</div>
                <div>₹148</div>
            </div>
            </Grid>
        </div>
        <Footer/>
        </>
    );
}

export default Homepage;
