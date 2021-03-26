import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navbar from '../../Layout/Navbar';
import styles from './Cart.module.css'

const Cart = () => {
    const history = useHistory()

    const handleShop = () => {
        history.push("/")
    }
    const cartData = useSelector(state => state.product.cart)
    console.log(cartData)
    return (
        <div>
        <Navbar/>
        {cartData.length === 0 ?(
            <div style={{margin:"15% 15% 0 35%"}}>
                <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" width="300px" alt="logo" />
                <div className={styles.mid} >
                <h2 >your cart is empty</h2>
                <button className={styles.shop} onClick={handleShop} >shop now</button>
                </div>
            </div>):(
        <Grid container className={styles.main} >
            <Grid item lg={6} className={styles.shadow} spacing={3} >
                <div className={styles.mycart}>myCart</div>
                {
                    cartData.map((item) => (
                        <div className={styles.flex}>
                            <div>
                                <img src={item.img} width="150px" alt="product_image" />
                                <div className={styles.qty} >
                                    <button>-</button> {item.qty} <button>+</button>
                                </div>
                            </div>
                            <div>
                                <div className={styles.name} >{item.product_name} </div>
                                <div className={styles.price}> ₹{item.price} </div>
                            </div>
                            <div>Delivery by Tomorrow, Mon | Free₹40</div>
                        </div>
                    ))
                }
                <div className={styles.place_order} >
                    <div className={styles.order} >PLACE ORDER</div>
                </div>
            </Grid>
            <Grid item className={styles.details} lg={4}>
                <div className={styles.price_details} >PRICE DETAILS</div>
                <div className={styles.items}>
                    <div>Price of Items</div>
                    <div>₹{
                        cartData.reduce((acc,curr) => {return acc+Number(curr.original_price)},0)
                    }
                    </div>
                </div>
                <div className={styles.amount}>
                    <div>Discount Amount</div>
                    <div>-₹{
                        cartData.reduce((acc,curr) => {return acc+Number(curr.original_price)},0) - cartData.reduce((acc,curr) => {return acc+Number(curr.price)},0)
                    }
                    </div>
                </div>
                <div className={styles.delivery} >
                    <div>Delivery Charges</div>
                    <div>FREE</div>
                </div>
                <div className={styles.total} >
                    <div>Total Amount</div>
                    <div>₹{
                        cartData.reduce((acc,curr) => {return acc+Number(curr.price)},0)
                    }
                    </div>
                </div>
                
            </Grid>
        </Grid>)}
        </div>
    );
}

export default Cart;
