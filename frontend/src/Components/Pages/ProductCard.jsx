import { Grid } from '@material-ui/core';
import React from 'react';
import styles from './ProductCard.module.css';
import {useHistory} from 'react-router-dom';

const ProductCard = ({id, img, product_name, rating, price}) => {
    const history = useHistory()
    const handleRedirect = (id) => {
        history.push(`/${id}`)
    }
    return (
        <Grid item  >
            
            <div className={styles.card} onClick={()=> handleRedirect(id)} >
                <img src={img} width="100px" alt="" />
                <div className={styles.name}>{product_name}</div>
                <div> {rating} </div>
                <div> ₹{price} </div>
            </div>
        </Grid>
    );
}

export {ProductCard}
