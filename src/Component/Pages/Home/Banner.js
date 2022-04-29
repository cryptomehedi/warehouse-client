import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <header className="relative grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-9 h-screen mb-12 overflow-hidden">
                <div className="relative z-30 md:text-left text-[#214967] p-2">
                    <div className='mb-2'>
                        <p className="text-4xl md:text-6xl">Let’s Start Shipping.</p> 
                        <p className='py-3 font-medium'>Order Fulfillment for E-Commerce.</p>
                        <p className='font-medium pr-3 md:pr-6'>We help online retailers get from shopping cart to customer with faster shipping, reduced shipping costs, seamless integrations, and a live, human customer support team. </p>
                    </div>
                    <button  className='bg-[#214967] text-white font-semibold p-2 px-3 md:px-5 rounded-full hover:font-bold md:mt-4 hover:bg-green-500 duration-500 text-center'>Read More</button>
                </div>
                <img loading='lazy' src='https://www.warehouseanywhere.com/home/hero.png' alt=""/>
            
            </header>
        </div>
    );
};

export default Banner;