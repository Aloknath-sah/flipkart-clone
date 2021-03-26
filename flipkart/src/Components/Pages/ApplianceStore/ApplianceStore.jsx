import { Grid } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../Layout/Navbar';
import styles from './ApplianceStore.module.css'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getProduct } from '../../../Redux/Product/action';

const ApplianceStore = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, []);
    //getting the product data
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
            <Grid item lg={2} className={styles.shadow} >
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

            <Grid item lg={10}>
                <div className={styles.sort}>
                    <div>Sort by</div>
                    <button onClick={() => setValue("popular")} >Popularity</button>
                    <button onClick={() => setValue("asc")}>Price--low to high</button>
                    <button onClick={() => setValue("dsc")}>Price--high to low</button>
                </div>
                <hr/>

                <div className={styles.innerdiv}>
                {/* filtering the product by category appliance and implementing the sorting feature */}
                {
                    product.filter((item) => item.category === "appliance")
                    .sort((a,b) => value === "popular"? b.rating - a.rating: value === "asc"? a.price-b.price : b.price - a.price)
                    .map((items) => (
                        <div className={styles.prod} onClick={() => handleClick(items.id)}>
                            <img src={items.img} width="25%" alt="product_image" />
                            <div style={{width:"50%"}} >
                                <div className={styles.prod_name} > {items.product_name} </div>
                                <div className={styles.rating}> {items.rating}* </div>
                                {
                                    items.features.map((feature) => (
                                        <ul>
                                            <li>{feature.feature1} </li>
                                            <li>{feature.feature2} </li>
                                            <li>{feature.feature3} </li>
                                            <li>{feature.feature4} </li>
                                        </ul>
                                    ))
                                }
                            </div>
                            <div className={styles.item_price} >
                                <div className={styles.price} > ₹{items.price} </div>
                                <div className={styles.discount} >
                                    <div className={styles.org_price}> ₹{items.original_price} </div>
                                    <div className={styles.discount_off} >{Math.floor(((items.original_price - items.price)/items.original_price) * 100)}% off  </div>
                                </div>
                                <small>Exchange 100% money back No cost EMI</small>
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

export default ApplianceStore;
