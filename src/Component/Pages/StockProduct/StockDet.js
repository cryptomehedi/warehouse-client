
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StockDet = () => {
    const {productId} = useParams()
    const [productDetails, setProductDetails] = useState([])
    useEffect(() => {
        axios.get(`https://warehouse-api-ser.herokuapp.com/stock/${productId}`)
        .then(data => setProductDetails(data.data))
    },[productId])
    const {img,name,price,seller,stock,} = productDetails
    return (
        <div className='md:flex justify-evenly items-center mt-11'>
            <div className='flex justify-center mb-8'>
                <img className='rounded-lg w-52 md:w-80' src={img} alt="" />
            </div>
            <div className='flex items-center ml-8 md:ml-0'>
                <div>
                    <p> <span className='font-medium text-xl'> Name:</span> <span className='font-medium'> {name}</span></p>
                    <p> <span className='font-medium text-xl'> Seller:</span> <span className='font-medium'> {seller}</span></p>
                    <p> <span className='font-medium text-xl'> Price:</span> <span className='font-medium'> ${price}</span></p>
                    <p> <span className='font-medium text-xl'> Available:</span> <span className='font-medium'> {stock}</span></p>
                </div>
            </div>
        </div>
    );
};

export default StockDet;