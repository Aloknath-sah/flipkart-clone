import { Grid } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navbar from '../../Layout/Navbar';
import styles from './MobileStore.module.css'
import {useDispatch} from 'react-redux'
import { getProduct } from '../../../Redux/Product/action';

const MobileStore = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, []);
    //getting the product data to use in this page
    const product = useSelector(state => state.product.product)
    const [value, setValue] = useState("popular")
    const [rating_val, setRating] = useState("")
    const [ram, setRam] = useState("6")
    const [toggle, setToggle] = useState(true)
    const [ram_toggle, setramToggle] = useState(true)
    console.log(toggle)
    const history = useHistory()
    console.log(rating_val)
    const handleRating = (e) => {
        setToggle(false)
        setRating(e.target.value)
        
    }

    const handleRam = (e) => {
        setToggle(false)
        setramToggle(false)
        setRam(e.target.value)
        
    }

    const handleClick = (id) => {
        history.push(`/${id}`)
    }

    const handleAll = () => {
        setramToggle(true)
    }

    const handleRatingToggle = () => {
        setToggle(true)
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
                        <button onClick={handleAll} >All</button>
                    </div>
                    <div className={styles.checkbox} >
                        <input type="checkbox" value="6" onChange={handleRam} />
                        <div>6 GB </div>
                    </div>
                    <div className={styles.checkbox} >
                        <input type="checkbox" value="4" onChange={handleRam} />
                        <div>4 GB </div>
                    </div>
                    <div className={styles.checkbox} >
                        <input type="checkbox" value="3" onChange={handleRam} />
                        <div>3 GB </div>
                    </div>
                    <div className={styles.ram}>CUSTOMER RATINGS</div>
                    <div className={styles.checkbox} >
                        <button onClick={handleRatingToggle}>All</button>
                    </div>
                    <div className={styles.checkbox_rating} >
                        <input value="4" onChange={handleRating} type="checkbox" />
                        <div>4* & above</div>
                    </div>
                    <div className={styles.checkbox_rating} >
                        <input type="checkbox" value="3" onChange={handleRating} />
                        <div>3* & above</div>
                    </div>
                    <div className={styles.checkbox_rating} >
                        <input type="checkbox" value="2" onChange={handleRating} />
                        <div>2* & above</div>
                    </div>
                    <div className={styles.checkbox_rating} >
                        <input type="checkbox" value="1" onChange={handleRating} />
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
                {/* filtering the product and adding the sorting feature */}
                {
                    toggle && ram_toggle && product.filter((item) => item.category === "mobile")
                    .sort((a,b) => value === "popular"? b.rating - a.rating: value === "asc"? a.price-b.price : b.price - a.price)
                    .map((items) => (
                        <div className={styles.prod} onClick={() => handleClick(items.id)} >
                            <img src={items.img} width="130px" />
                            <div>
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
                {
                    !toggle && ram_toggle && product.filter((rat) => rat.rating > rating_val).filter((item) => item.category === "mobile")
                    .sort((a,b) => value === "popular"? b.rating - a.rating: value === "asc"? a.price-b.price : b.price - a.price)
                    .map((items) => (
                        <div className={styles.prod} onClick={() => handleClick(items.id)} >
                            <img src={items.img} width="130px" />
                            <div>
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
                {
                    !toggle && !ram_toggle && product.filter((rams) => rams.device_ram == ram).filter((item) => item.category === "mobile")
                    .sort((a,b) => value === "popular"? b.rating - a.rating: value === "asc"? a.price-b.price : b.price - a.price)
                    .map((items) => (
                        <div className={styles.prod} onClick={() => handleClick(items.id)} >
                            <img src={items.img} width="130px" />
                            <div>
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

export default MobileStore;
