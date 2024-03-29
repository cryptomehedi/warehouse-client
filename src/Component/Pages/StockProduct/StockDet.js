

import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import axiosPrivate from '../../API/Axios';
import Spinner from '../../Common-Items/Spinner';
import usePDId from '../../hooks/usePDId';
const StockDet = () => {
    const [user] = useAuthState(auth)
    const {productId} = useParams()
    const stockInput = useRef(0)
    const [available, setAvailable] = useState(false)

    const location = useLocation()
    let from = location.state?.from?.pathname || "/inventory";
    const navigate = useNavigate()

    const [productDetails, setProductDetails] = usePDId(productId)
    const {img,name,price,seller,stock,description, _id} = productDetails


    const handlePdUpdate = e => {
        let name = productDetails.name
        let img = productDetails.img
        let price = productDetails.price
        let seller = productDetails.seller
        let quantity = productDetails.stock
        let description = productDetails.description
        let stock 
        if(e){
            if(quantity > 0 ){
                stock = productDetails.stock - 1
            }else{
                stock = 0
            }
        }else{
            const updateStock = parseInt(stockInput?.current?.value)
            if(!isNaN(updateStock)){
                if(updateStock > 0){
                    stock = productDetails.stock + updateStock
                    setAvailable(false)
                }else{
                    return  toast.error("Update Stock Can't Be Negative")
                }
            }else{
                stock = productDetails.stock + 1
                setAvailable(false)
            }
        }

        const userInfo = user.email ? user.email : user.displayName
        const delivery = {img,name,price,seller,stock, description}
        axiosPrivate.put(`https://warehouse-server.onrender.com/stock/${productId}`, {delivery, userInfo} )
        if(e){
            if(quantity > 0){
                toast.success('Product Delivery Successful')
            }
            else{
                toast.error('Product Not Available for Delivery')
            }
        }else{
            toast.success(stock < 2 ? `${stock} Product Added Successfully` : `${stock} Products Added Successfully`, {
                
            })
        }
        delivery.stock === 0 && setAvailable(true)
        setProductDetails(delivery)
    }

    const deleteProduct = id =>{
        const proceed = window.confirm('are you sure you want to delete this')
        if(proceed){
            axios.delete(`https://warehouse-server.onrender.com/stock/${id}`)
            toast.success('Item Deleted Successfully')
            navigate(from, { replace: true })
        }
    }
    return (
        <div>
            <Helmet>
                    <title>Stock Details - WareHouse</title>
            </Helmet>
            {
                productDetails.name ? <div className='md:flex justify-evenly items-center mt-11'>
                
                <div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg w-52 md:w-80' src={img} alt="" />
                </div>
                <p className='break-all md:w-80'>{description && <><span className='font-semibold'>Description:</span> {description}</>}</p>
                </div>
                <div>
                <div className='flex items-center ml-8 md:ml-0'>
                    <div>
                        <p> <span className='font-medium text-xl'> Name:</span> <span className='font-medium'> {name}</span></p>
                        <p> <span className='font-medium text-xl'> Seller:</span> <span className='font-medium'> {seller}</span></p>
                        <p> <span className='font-medium text-xl'> Price:</span> <span className='font-medium'> ${price}</span></p>
                        <p> <span className='font-medium text-xl'> Available:</span> <span className='font-medium'> {stock === 0 ? 'Sold Out' : <>{stock ===1 ?  <>{stock} Piece</> : <>{stock} Pieces</>}</>}</span></p>
                        {
                            stock===0 && <form>
                                            <input className="mt-1 focus:ring-indigo-500 hover:border-slate-500 border py-2 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md" required ref={stockInput} name='stock' type="number" id="stock" placeholder='Update Product Quantity'/>
                                        </form>
                        }
                        <button onClick={()=>handlePdUpdate(false)} className='p-2 mr-5 bg-gray-400  font-semibold rounded-lg hover:bg-green-400 hover:text-white duration-300 mt-3'>Update stock</button>
                        <button onClick={()=>handlePdUpdate(true)} disabled={available} className={available? ' disabled:opacity-50 p-2 bg-gray-400 cursor-not-allowed font-semibold rounded-lg mt-3' : 'p-2 bg-gray-400  font-semibold rounded-lg hover:bg-green-400 hover:text-white duration-300 mt-3'}>Delivery</button>
                    </div>
                </div>
                <button onClick={()=>deleteProduct(_id)} className='p-2 w-full mr-5 bg-gray-400  font-semibold rounded-lg hover:bg-green-400 hover:text-white duration-300 mt-3'>Delete Item</button>
                </div>
            </div>
            : <div className="text-center mt-9"><Spinner text='Please wait! Your product is Loading......'/></div>
            }
        </div>
    );
};

export default StockDet;