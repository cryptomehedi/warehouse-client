import axios from 'axios';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useProductLoad from '../../hooks/UseProductLoad';
// import DeleteModal from './DeleteModal';

const ManegeProduct = () => {
    const [showModal, setShowModal] = useState(true);
    const [products , setProducts] = useProductLoad()
    const handleDelModal = () => {
        console.log('first')
        // setShowModal(true)
        return `${showModal ? 
            <>
            {
                console.log('first')
            }
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Want to delete this item?
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(!showModal)}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            x
                            </span>
                        </button>
                        </div>
                        {/*body*/}
                        
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                                setShowModal(!showModal)
                                // setConfirm(true)
                            }}
                        >
                            NO
                        </button>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                                setShowModal(!showModal)
                                // setConfirm(true)
                            }}
                        >
                            Yes
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        : null}`
    }
    const deleteProduct = id =>{
        
        const proceed = window.confirm('are you sure you want to delete this')
        if(proceed){
            axios.delete(`http://localhost:4000/stock/${id}`)
            .then(data => {
                if(data.data.deletedCount > 0) {
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
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
                    {
                        // <DeleteModal showDelModal={showModal} />
                    }
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                                {
                                    products.map( (product) =>  <div className="bg-gray-100 shadow-lg hover:shadow-2xl rounded-lg p-1 m-3" key={product._id}>
                                                                    <div className='flex justify-center mb-2'>
                                                                        <img className='rounded-lg w-52 md:w-40' src={product.img} alt="" />
                                                                    </div>
                                                                    <div className='flex justify-between px-1 items-center'>
                                                                        <div className='mr-5'>
                                                                            <p className='text-sm'>Name: {product.name}</p>
                                                                            <p >Stock: {product.stock}</p>
                                                                        </div>
                                                                        <button onClick={()=>{
                                                                            handleDelModal()
                                                                            deleteProduct(product._id)
                                                                        }} className='bg-[#214967] text-white font-semibold p-1 px-2 md:px-3 rounded-full hover:font-bold md:mt-4 hover:bg-green-500 duration-500 text-center'>Delete</button>
                                                                    </div>
                                                                </div>
                                                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
};

export default ManegeProduct;