import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Helmet } from 'react-helmet-async';
import Spinner from '../../Common-Items/Spinner';

const Stock = () => {
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page , setPage] = useState(0)
    const [size] = useState(9)
    const [count, setCount] = useState(0)
    useEffect(() =>{
        axios.get(`https://warehouse-server.onrender.com/pagesPd?page=${page}&size=${size}`)
        .then(data =>setProducts(data.data))
    },[page, size])
    useEffect(() => {
        axios.get('https://warehouse-server.onrender.com/allPdCount')
        .then(data => {
            const count = data.data.count
            setCount(count)
            const pages = Math.ceil(count/size)
            setPageCount(pages)
        })
    },[size])
    
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/inventory/${id}`)
    }
    const handleNext = () => {
            if(pageCount -1 > page){
                setPage( page+1)
        }
    }
    const handlePrev = () => {
        if(page >0){
            setPage( page-1)
        }
    }

    return (
        <div className="bg-white">
            <Helmet>
                <title>Inventory - WareHouse</title>
            </Helmet>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Your Available Stock Product</h2>
                {products.length > 0 ? <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product._id} className="group relative">
                            <div className=" min-h-80 flex justify-center aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                src={product.img}
                                alt=''
                                className="w-2/3 object-center object-cover rounded-lg lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4">
                                <div className='flex justify-evenly items-center'>
                                    <div>
                                        <h3 className="text-sm text-gray-700">Name: {product.name}</h3>
                                        <p>Price: {product.price}</p>
                                    </div>
                                    <div>
                                        <p>Seller: {product.seller}</p>
                                        <p>{product.stock === 0 ? <span className='text-red-500 font-medium'>Sold Out</span> : <> Quantity:  {product.stock ===1 ?  <>{product.stock} Piece</> : <>{product.stock} Pieces</>}</>}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button onClick={()=> navigateToServiceDetail(product._id)} className="bg-gray-400 mt-4 hover:bg-green-400 hover:text-white hover:font-medium w-full p-1 rounded">Stock Update</button>
                            </div>
                        </div>
                    ))}
                </div>
                : <div className="text-center mt-9"><Spinner text='Please Wait! Product Is Loading......'/></div>}
            </div>
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                <button
                onClick={()=> handlePrev()}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                Previous
                </button>
                <button
                onClick={()=> handleNext()}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                Next
                </button>
            </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{products.length} Products</span> Of <span className="font-medium">{count}</span> results. Page NO: <span className="font-medium">{page+1}</span>
                        </p>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                        onClick={()=> handlePrev()}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                            {
                                [...Array(pageCount).keys()].map(number => <button
                                    key={number}
                                    onClick={()=> setPage(number)}
                                    aria-current="page"
                                    className={number === page ? " relative inline-flex items-center px-4 py-2 border text-sm font-medium z-10 bg-indigo-50 border-indigo-500 text-indigo-600" : "relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white border-gray-300 text-gray-500 hover:bg-gray-50"}
                                    >
                                    {number+1}
                                    </button>)
                            }
                            <button
                            onClick={()=> handleNext()}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            
                            
                        </nav>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Stock;