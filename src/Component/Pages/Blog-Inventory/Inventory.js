// import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import auth from '../../../firebase.init';
import axiosPrivate from '../../API/Axios';

const Inventory = () => {
    const [user] = useAuthState(auth)
    const [products, setProducts] = useState([])
    console.log(products);
    useEffect( () => {
        const email = user.email
        console.log(email)
        const run = async() => {
            
            try{
                const {data} = await axiosPrivate.get(`http://localhost:4000/userAdd?email=${email}`)
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
    return (
        <div>
            <Helmet>
                <title>Your Order - Genius Car Services</title>
            </Helmet>
            <h2>Your Added Product total: {products.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <div className="my-5 p-5 w-80 font-semibold bg-slate-400 rounded " key={product._id}>
                                            <div className='flex justify-evenly items-center'>
                                                <div><img className='w-20 rounded-lg' src={product.img} alt="" /></div>
                                                <div>
                                                    <p>Name: {product.name}</p>
                                                    <p>Email: {product.stock}</p>
                                                </div>
                                            </div>
                                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Inventory;