// import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import axiosPrivate from '../../API/Axios';
import Spinner from '../../Common-Items/Spinner';

const Inventory = () => {
    const [user] = useAuthState(auth)
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect( () => {
        const email = user.email
        const run = async() => {
            
            try{
                const {data} = await axiosPrivate.get(`https://warehouse-api-ser.herokuapp.com/userAdd?email=${email}`)
                setProducts(data)
            }
            catch(error){
                console.log("this is error",error)
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth)
                }
            }
        }
        run()
    },[user])
    const navigateToServiceDetail = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div>
            <Helmet>
                <title>My Items - WareHouse</title>
            </Helmet>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">You Have Added total {products.length === 0 ? <>{products.length} Product</> : <>{products.length} Products</>} </h2>
            {products.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <div onClick={()=> navigateToServiceDetail(product._id)} className="my-5 cursor-pointer p-5 w-80 font-semibold bg-slate-400 rounded " key={product._id}>
                                            <div className='flex justify-evenly items-center'>
                                                <div><img className='w-20 rounded-lg' src={product.img} alt="" /></div>
                                                <div>
                                                    <p>Name: {product.name}</p>
                                                    <p>Price: ${product.price}</p>
                                                    <p>Stock: {product.stock}</p>
                                                </div>
                                            </div>
                                        </div>
                    )
                }
            </div>
            : <div className="text-center mt-9"><Spinner text='Please wait! Your product is Loading......'/></div>}
        </div>
    );
};

export default Inventory;