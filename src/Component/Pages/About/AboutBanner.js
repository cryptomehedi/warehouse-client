import React from 'react';
import aboutBanner from '../../../Img/warehouse-about.jpg'

const AboutBanner = () => {
    return (
        <header className="relative flex items-center justify-center mt-5 md:mt-9 h-screen mb-12 overflow-hidden">
            <div className="relative z-30 md:text-center text-[#384E62] p-8">
                <div className=" text-4xl md:text-6xl">
                    <p >ABOUT WAREHOUSE</p> 
                    
                </div>
                <p className='md:mt-5 md:text-center'>Warehouse Anywhere provides warehousing and distribution services in a completely new way. Our services combine storage asset management with ground-breaking inventory tracking technology to install affordable mini-distribution centers in any city you need.</p>
                <button className='bg-[#384E62] text-white font-semibold p-2 px-3 md:px-5 rounded-full hover:font-bold md:mt-4 hover:bg-green-500 duration-500 text-center'>Read More</button>
            </div>
            <img src={aboutBanner} className="absolute opacity-70 min-w-full min-h-full max-w-none" alt=""/>
            
        </header>
    );
};

export default AboutBanner;