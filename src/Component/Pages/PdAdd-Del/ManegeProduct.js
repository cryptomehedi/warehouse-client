import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../Common-Items/Spinner';
import useProductLoad from '../../hooks/UseProductLoad';


const ManegeProduct = () => {
    const [products , setProducts] = useProductLoad()
    
    
    const deleteProduct = id =>{
        const proceed = window.confirm('are you sure you want to delete this')
        if(proceed){
            
            axios.delete(`https://warehouse-api-ser.herokuapp.com/stock/${id}`)
            .then(data => {
                if(data.data.deletedCount > 0) {
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                    toast.success('Item Deleted Successfully')
                }
            })
        }
    }
    return (
        
            <>
                <Helmet>
                <title>Manege Product - WareHouse</title>
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
                            <p className="mt-1 text-sm text-gray-600">Please Be Careful About Deleting Product Information</p>
                            <p>Want To Add a Product? Please <Link className="font-semibold text-[#214967] hover:text-indigo-500" to="/add">Click Here</Link></p>
                        </div>
                    </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                        {products.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                                {
                                    products.map( (product) =>  <div className="bg-gray-100 shadow-lg hover:shadow-2xl rounded-lg p-1 m-3" key={product._id}>
                                                                    <div className='flex justify-center mb-2'>
                                                                        <img className='rounded-lg w-52 md:w-40' src={product.img} alt="" />
                                                                    </div>
                                                                    <div className='flex justify-between px-1 items-center'>
                                                                        <div className='mr-5'>
                                                                            <p className='text-sm'>Name: {product.name}</p>
                                                                            <p>{product.stock === 0 ? <span className='text-red-500 font-medium'>Sold Out</span> : <> Quantity:  {product.stock ===1 ?  <>{product.stock} Piece</> : <>{product.stock} Pieces</>}</>}</p>
                                                                        </div>
                                                                        <button onClick={()=>{
                                                                            deleteProduct(product._id)
                                                                        }} className='bg-[#214967] text-white font-semibold p-1 px-2 md:px-3 rounded-full hover:font-bold md:mt-4 hover:bg-green-500 duration-500 text-center'>Delete</button>
                                                                    </div>
                                                                </div>
                                                                )
                                }
                            </div>
                            : <div className="text-center mt-9"><Spinner text='Please wait! Your product is Loading......'/></div>}
                        </div>
                    </div>
                </div>
            </>
    );
};

export default ManegeProduct;