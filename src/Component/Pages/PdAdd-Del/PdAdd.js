import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import axiosPrivate from '../../API/Axios';

const PdAdd = () => {
    const [user] = useAuthState(auth)
    const [errorPrice , setErrorPrice] = useState('')
    const [errorStock , setErrorStock] = useState('')
    const handleAddProduct = async e => {
        e.preventDefault();
        let name = e.target.name.value
        let userInfo = user.email ? user.email : user.displayName
        let img = e.target.img.value
        let price = parseInt(e.target.price.value)
        let seller = e.target.seller.value
        let description = e.target.description.value
        let stock = parseInt(e.target.stock.value)
        
        if(!isNaN(price)){
            if(price > 0){
                if(!isNaN(stock)){
                    if(stock > 0 ){
                        const allPdInfo = {img,name,userInfo,price,seller,stock,description}
                        axiosPrivate.post('https://warehouse-server.onrender.com/stock', {allPdInfo, userInfo})
                        setErrorStock('')
                        setErrorPrice('')
                        toast.success('product added successfully')
                        e.target.reset()
                    }else{
                        setErrorPrice('')
                        setErrorStock('Stock Must Be Positive Number')
                    }
                }else{
                    setErrorPrice('')
                    setErrorStock('Stock Must Be Number')
                }
            }else{
            setErrorStock('')
            setErrorPrice('Price Must Be Positive Number')
            }
        }else{
            setErrorStock('')
            setErrorPrice('Price Must Be Number')
        }
    }

    return (
        <>
            <Helmet>
                <title>Add Product - WareHouse</title>
            </Helmet>
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                <div className="border-t border-gray-200" />
                </div>
            </div>
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Add Product</h3>
                        <p className="mt-1 text-sm text-gray-600">Use a Valid Information For Adding Product.</p>
                        <p>Want To Delete? Please <Link className="font-semibold text-[#214967] hover:text-indigo-500" to="/del">Click Here</Link></p>
                    </div>
                </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleAddProduct}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        
                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="img" className="block text-sm font-medium text-gray-700">
                                                Image URL <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="img"
                                                id="img"
                                                autoComplete="off"
                                                className="mt-1 focus:ring-indigo-500 hover:border-slate-500 border py-2 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
                                            />
                                        </div>
                                        
                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Product Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="off"
                                                className="mt-1 focus:ring-indigo-500 hover:border-slate-500 border py-2 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
                                            />
                                        </div>
                                        
                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="seller" className="block text-sm font-medium text-gray-700">
                                                Seller Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="seller"
                                                id="seller"
                                                autoComplete="off"
                                                className="mt-1 focus:ring-indigo-500 hover:border-slate-500 border py-2 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                                Price <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="price"
                                                id="price"
                                                autoComplete="off"
                                                className="mt-1 focus:ring-indigo-500 hover:border-slate-500 border py-2 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
                                            />
                                            <p className='text-red-500 mt-2 ml-1  font-semibold'>{errorPrice}</p>
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                                                Stock <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="stock"
                                                id="stock"
                                                autoComplete="off"
                                                className="mt-1 focus:ring-indigo-500 hover:border-slate-500 border py-2 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
                                            />
                                            <p className='text-red-500 mt-2 ml-1 font-semibold'>{errorStock}</p>
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="seller" className="block text-sm font-medium text-gray-700">
                                                Description <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                required
                                                type="text"
                                                name="description"
                                                id="description"
                                                autoComplete="off"
                                                className="mt-1 h-20 focus:ring-indigo-500 hover:border-slate-500 border py-2 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 lg:mr-64 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white duration-300 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Add Product
                                    </button>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PdAdd;