import { Grid } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { getProduct } from '../../../Redux/Product/action';
import Navbar from '../../Layout/Navbar';
import styles from './FashionStore.module.css'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';

const FashionStore = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, []);
    //getting the product data to use in this page
    const product = useSelector(state => state.product.product)
    const [value, setValue] = useState("popular")
    const history = useHistory()

    const handleClick = (id) => {
        history.push(`/${id}`)
    }
    return (
        <div>
        <Navbar/>
        <Grid container className={styles.margin} >
            <Grid item xs={4} sm={3} md={2} lg={2} className={styles.shadow} >
                <div className={styles.filter}>Filters</div>
                <hr/>
                <div>
                    <div className={styles.ram} > RAM </div>
                    <div className={styles.checkbox} >
                        <input type="checkbox" />
                        <div>4 GB </div>
                    </div>
                    <div className={styles.checkbox} >
                        <input type="checkbox" />
                        <div>3 GB </div>
                    </div>
                    <div className={styles.ram}>CUSTOMER RATINGS</div>
                    <div className={styles.checkbox_rating} >
                        <input type="checkbox" />
                        <div>4* & above</div>
                    </div>
                    <div className={styles.checkbox_rating} >
                        <input type="checkbox" />
                        <div>3* & above</div>
                    </div>
                    <div className={styles.checkbox_rating} >
                        <input type="checkbox" />
                        <div>2* & above</div>
                    </div>
                    <div className={styles.checkbox_rating} >
                        <input type="checkbox" />
                        <div>1* & above</div>
                    </div>
                </div>
            </Grid>

            <Grid item xs={8} sm={9} md={10} lg={10}>
                <div className={styles.sort}>
                    <div>Sort by</div>
                    <button onClick={() => setValue("popular")} >Popularity</button>
                    <button onClick={() => setValue("asc")}>Price--low to high</button>
                    <button onClick={() => setValue("dsc")}>Price--high to low</button>
                </div>
                <hr/>
                <div className={styles.innerdiv}>
                {/* filter product by category fashion and apply sorting feature */}
                {
                    product.filter((item) => item.category === "fashion")
                    .sort((a,b) => value === "popular"? b.rating - a.rating: value === "asc"? a.price-b.price : b.price - a.price)
                    .map((items) => (
                        <div className={styles.card} onClick={() => handleClick(items.id)}>
                            <img src={items.img} width="100%" alt="product" />
                            <div> {items.product_name} </div>
                            <div className={styles.rating} > {items.rating}* </div>
                            <div className={styles.price}>
                                <div> ₹{items.price} </div>
                                <div> ₹{items.original_price} </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </Grid>
        </Grid>
        </div>
    );
}

export default FashionStore;
