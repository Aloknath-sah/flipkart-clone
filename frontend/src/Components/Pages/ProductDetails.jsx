import React from 'react';
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux'

const ProductDetails = () => {
    const params = useParams()
    const product = useSelector(state => state.product.product)
    const prod_detail = product.find((item) => item.id == params.id)
    console.log(prod_detail)
    return (
        <div>
            
        </div>
    );
}

export default ProductDetails;
