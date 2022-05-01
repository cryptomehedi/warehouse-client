import React from 'react';
import { AnnotationIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'




const Banner = () => {
    const features = [
        {
            name: 'Faster Shipping',
            description:
                'With five E-commerce fulfillment centers in the US, we’re closer to every customer’s door.',
            //   icon: GlobeAltIcon,
            icon: LightningBoltIcon,
        },
        {
            name: 'Reduce Shipping Costs',
            description:
                'Our competitive multi-carrier shipping relationships allow you to ship to customers more affordably.',
            icon: ScaleIcon,
        },
        {
            name: 'Our Team is your Team',
            description:
                'Our customer success team has your back, working to create the best experience for your customers.',
            //   icon: LightningBoltIcon,
            icon: AnnotationIcon,
        }
    ]
    return (
        <div className=''>
            <header className="relative grid grid-cols-1 md:grid-cols-2 mt-5 items-center md:mt-9 h-screen overflow-hidden">
                <div className="relative z-30 md:text-left text-[#214967] p-2">
                    <div className='mb-2'>
                        <p className="text-4xl md:text-6xl">Let’s Start Shipping.</p> 
                        <p className='py-3 font-medium'>Order Fulfillment for E-Commerce.</p>
                        <p className='font-medium pr-3 md:pr-6'>We help online retailers get from shopping cart to customer with faster shipping, reduced shipping costs, seamless integrations, and a live, human customer support team. </p>
                    </div>
                    <button  className='bg-[#214967] text-white font-semibold p-2 px-3 md:px-5 rounded-full hover:font-bold md:mt-4 hover:bg-green-500 duration-500 text-center'>Learn More</button>
                </div>
                <img loading='lazy' src='https://i.ibb.co/GpgqbgT/Ware-House-Banner.png' alt=""/>
            </header>
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="">
                        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;