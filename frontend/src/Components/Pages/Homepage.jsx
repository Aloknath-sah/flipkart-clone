import React, {useEffect} from 'react';
import BootstrapCarousel from '../Layout/BootstrapCarousel ';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import { Grid } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import { getProduct } from '../../Redux/Product/action';
import {ProductCard} from '../Pages/ProductCard';
import { getUserData } from '../../Redux/Register/action';

const Homepage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
        dispatch(getUserData())
    }, []);

    const product = useSelector(state => state.product.product)
    console.log(product)
    return (
        <>
        <Navbar/>
        <div style={{marginTop:"6%"}}>

            <BootstrapCarousel></BootstrapCarousel>
            <Grid container style={{padding: "2%"}}>
                {
                    product.map((item) => <ProductCard {...item} key={item.id} />)
                }
            </Grid>
            
        </div>
        <Footer/>
        </>
    );
}

export default Homepage;
