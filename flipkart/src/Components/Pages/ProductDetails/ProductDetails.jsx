import React, {useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import styles from './ProductDetails.module.css'
import { Grid } from '@material-ui/core';
import { addToCart, getProduct } from '../../../Redux/Product/action';
import Navbar from '../../Layout/Navbar';
import Footer from '../../Layout/Footer/Footer';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const ProductDetails = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const history = useHistory()
    useEffect(() => {
        dispatch(getProduct())
    }, []);

    const product = useSelector(state => state.product.product)
    console.log(product)
    const prod_detail = product.find((item) => item.id == params.id)
    console.log(prod_detail)
    const isAuthVal = useSelector(state => state.register.isAuthVal)

    const handleCart = (id) => {
        dispatch(addToCart(id))
        if(isAuthVal){
            history.push("/cart/cartData")
        }
    }

    const cart = useSelector(state => state.product.cart)
    console.log(cart)
    const classes = useStyles()
    return (
        <>
        <Navbar/>
        <div className={styles.cont}>
            <Grid container>
                <Grid item xs={12} md={6} lg={6} >
                    <img className={styles.zoom} src={prod_detail.img} width="80%" alt="details" />
                    <div className={styles.tag}>
                        <button className={styles.cart} onClick={() => handleCart(prod_detail.id)} >ADD TO CART</button>
                        <button className={styles.buy} onClick={() => handleCart(prod_detail.id)} >BUY NOW</button>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} lg={6} >
                    <div className={styles.prod_name} >{prod_detail.product_name} </div>
                    <div className={styles.rating} >{prod_detail.rating} </div>
                    <div className={styles.price} >₹{prod_detail.price} </div>
                    <div className={styles.offer} >Available offers</div>
                    {
                        prod_detail.offers.map((item) => (
                            <div className={styles.detail} >
                                <div className={styles.tag} >
                                    <img src={prod_detail.logo} alt="logo" width="20px" />
                                    <div>{item.offers1} </div>
                                </div>
                                <div className={styles.tag} >
                                    <img src={prod_detail.logo} alt="logo" width="20px" />
                                    <div>{item.offers2} </div>
                                </div>
                                <div className={styles.tag} >
                                    <img src={prod_detail.logo} alt="logo" width="20px" />
                                    <div>{item.offers3} </div>
                                </div>
                                <div className={styles.tag} >
                                    <img src={prod_detail.logo} alt="logo" width="20px" height="25px" />
                                    <div>{item.offers4} </div>
                                </div>
                            </div>
                        ))
                    }
                </Grid>
            </Grid>
        </div>
        {
            isAuthVal? <div></div> : <Alert severity="error">please login to view items to cart!</Alert>
        } 
        <Footer/>
        </>
    );
}

export default ProductDetails;
