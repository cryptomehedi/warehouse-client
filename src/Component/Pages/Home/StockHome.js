import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProductLoad from '../../hooks/UseProductLoad';

const StockHome = () => {
    const [products] = useProductLoad()
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/stock/${id}`)
    }
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Your Available Stock Product</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.slice(0,6).map((product) => (
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
                                </div>
                            </div>
                            <div className="text-center">
                                <button onClick={()=> navigateToServiceDetail(product._id)} className="bg-gray-400 mt-4 hover:bg-green-400 hover:text-white hover:font-medium w-full p-1 rounded">See Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StockHome;