import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Stock = () => {
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page , setPage] = useState(0)
    const [size] = useState(9)
    const [count, setCount] = useState(0)
    useEffect(() =>{
        fetch(`https://warehouse-api-ser.herokuapp.com/pagesPd?page=${page}&size=${size}`)
        .then(res=> res.json())
        .then(data =>setProducts(data))
    },[page, size])
    useEffect(() => {
        fetch('https://warehouse-api-ser.herokuapp.com/allPdCount')
        .then(response => response.json())
        .then(data => {
            const count = data.count
            setCount(count)
            const pages = Math.round(count/size)
            setPageCount(pages)
        })
    },[size])
    
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/stock/${id}`)
    }

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Your Available Stock Product</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product._id} className="group relative">
                            <div className=" min-h-80 flex justify-center aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                src={product.img}
                                alt=''
                                className="w-2/3 object-center object-cover rounded-lg lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        Name: {product.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Stock: {product.stock}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">Price: ${product.price}</p>
                            </div>
                            <div className="text-center">
                                <button onClick={()=> navigateToServiceDetail(product._id)} className="bg-gray-400 mt-4 hover:bg-green-400 hover:text-white hover:font-medium w-full p-1 rounded">See Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{size} Products</span> Of <span className="font-medium">{count}</span> results. Page NO: <span className="font-medium">{page+1}</span>
                        </p>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            
                            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                            {
                                [...Array(pageCount).keys()].map(number => <button
                                    key={number}
                                    onClick={()=> setPage(number)}
                                    aria-current="page"
                                    className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                    >
                                    {number+1}
                                    </button>)
                            }
                            
                            
                            
                        </nav>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Stock;

// {[...Array(pageCount).keys()].map(number => <button className={page === number ? 'selected' : ''} onClick={()=> setPage(number)}>{number+1}</button>)}