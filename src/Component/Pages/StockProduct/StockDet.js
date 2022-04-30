
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import usePDId from '../../hooks/usePDId';

const StockDet = () => {
    const {productId} = useParams()
    const [productDetails, setProductDetails] = usePDId(productId)
    const {img,name,price,seller,stock,} = productDetails

    const handlePdUpdate = e => {
        let name = productDetails.name
        let img = productDetails.img
        let price = productDetails.price
        let seller = productDetails.seller
        let stock
        if(e){
            stock = productDetails.stock - 1
        }else{
            stock = productDetails.stock + 1
        }
        const delivery = {img,name,price,seller,stock}
        axios.put(`https://warehouse-api-ser.herokuapp.com/stock/${productId}`, delivery)
        .then(data=> console.log(data))
        if(e){
            alert('Product Delivery Successful')
        }else{
            alert('Product Update Successful')
        }
        setProductDetails(delivery)
    }
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
                    <p> <span className='font-medium text-xl'> Available:</span> <span className='font-medium'> {stock} Piece</span></p>
                    <button onClick={()=>handlePdUpdate(false)} className='p-2 mr-5 bg-gray-400  font-semibold rounded-lg hover:bg-green-400 hover:text-white duration-300 mt-3'>Update stock</button>
                    <button onClick={()=>handlePdUpdate(true)} className='p-2 bg-gray-400  font-semibold rounded-lg hover:bg-green-400 hover:text-white duration-300 mt-3'>Delivery</button>
                </div>
            </div>
        </div>
    );
};

export default StockDet;