import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Cart.module.css'

const Cart = () => {
    const cartData = useSelector(state => state.product.cart)
    console.log(cartData)
    return (
        <Grid container >
            <Grid item>
                <div>myCart</div>
                {
                    cartData.map((item) => (
                        <div className={styles.flex}>
                            <div>
                                <img src={item.img} width="50px" />
                                <div> {item.qty} </div>
                            </div>
                            <div>
                                <div>{item.product_name} </div>
                                <div>{item.price} </div>
                            </div>
                            <div>Delivery by Tomorrow, Mon | Free₹40</div>
                        </div>
                    ))
                }
            </Grid>
            <Grid item>
                <div>PRICE DETAILS</div>
            </Grid>
        </Grid>
    );
}

export default Cart;
