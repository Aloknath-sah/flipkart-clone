import React, {useEffect} from 'react';
import BootstrapCarousel from '../../Layout/BootstrapCarousel ';
import Footer from '../../Layout/Footer/Footer';
import Navbar from '../../Layout/Navbar';
import { Grid } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getProduct } from '../../../Redux/Product/action';
import {ProductCard} from '../ProductCard/ProductCard';
import { getUserData } from '../../../Redux/Register/action';
import styles from './HomePage.module.css'

const Homepage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
        dispatch(getUserData())
    }, []);

    const product = useSelector(state => state.product.product)
    return (
        <>
        <Navbar/>
        <div style={{marginTop:"6%"}}>
            <div className={styles.header}>
                <img src="https://rukminim1.flixcart.com/www/816/816/promos/23/03/2021/284eae1b-53c0-4648-8e75-3fc127e3a9cc.png?q=90" alt="sale" />
                
                <Link to="/mobile/mobile-phones-store" > <img src="https://rukminim1.flixcart.com/www/200/200/promos/22/03/2021/28ca1a38-bb47-4707-8593-06be457dda0d.png?q=90" alt="mobile" />
                <div>Mobiles</div>
                </Link>

                <Link to="/electronic/electronic-store" > <img src="https://rukminim1.flixcart.com/www/200/200/promos/22/03/2021/6e46e87f-ba66-4bc9-b8a9-1c94ee1d1ac5.png?q=90" alt="electronic" />
                <div>Electronics</div>
                </Link>

                <Link to="/fashion/fashion-store" > <img src="https://rukminim1.flixcart.com/www/200/200/promos/22/03/2021/f378f75c-e953-423c-b43c-ba2c14d31968.png?q=90" alt="fashion" />
                <div>Fashion</div>
                </Link>

                <Link to="/appliance/appliance-store" > <img src="https://rukminim1.flixcart.com/www/200/200/promos/22/03/2021/a09bdcf1-6af0-4252-8156-cdae77f6a73a.png?q=90" alt="appliances" />
                <div>Fashion & TV appliances</div>
                </Link>
            </div>
            <BootstrapCarousel></BootstrapCarousel>
            <Grid container style={{padding: "2%"}}>
                {
                    product.filter((items)=> items.category === "equipment").map((item) => <ProductCard {...item} key={item.id} />)
                }
            </Grid>
            
        </div>
        <Footer/>
        </>
    );
}

export default Homepage;
