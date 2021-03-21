import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import styles from './ProductDetails.module.css'
import { Grid } from '@material-ui/core';
import { addToCart } from '../../Redux/Product/action';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const ProductDetails = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const history = useHistory()
    const product = useSelector(state => state.product.product)
    const prod_detail = product.find((item) => item.id == params.id)
    console.log(prod_detail)

    const handleCart = (id) => {
        dispatch(addToCart(id))
        history.push("/cart/cartData")
    }

    const cart = useSelector(state => state.product.cart)
    console.log(cart)
    return (
        <>
        <Navbar/>
        <div className={styles.cont}>
            <Grid container >
                <Grid item className={styles.cont1}>
                    <img src={prod_detail.img} />
                    <div className={styles.tag}>
                        <button className={styles.cart} onClick={() => handleCart(prod_detail.id)} >ADD TO CART</button>
                        <button className={styles.buy} >BUY NOW</button>
                    </div>
                </Grid>
                <Grid>
                    <div>{prod_detail.product_name} </div>
                    <div>{prod_detail.rating} </div>
                    <div>{prod_detail.price} </div>
                    <div>Available offers</div>
                    {
                        prod_detail.offers.map((item) => (
                            <div>
                                <div className={styles.tag} >
                                    <img src={prod_detail.logo} width="20px" />
                                    <div>{item.offers1} </div>
                                </div>
                                <div className={styles.tag} >
                                    <img src={prod_detail.logo} width="20px" />
                                    <div>{item.offers2} </div>
                                </div>
                                <div className={styles.tag} >
                                    <img src={prod_detail.logo} width="20px" />
                                    <div>{item.offers3} </div>
                                </div>
                                <div className={styles.tag} >
                                    <img src={prod_detail.logo} width="20px" />
                                    <div>{item.offers4} </div>
                                </div>
                                
                            </div>
                        ))
                    }
                </Grid>
            </Grid>
        </div>
        <Footer/>
        </>
    );
}

export default ProductDetails;
