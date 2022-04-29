import React from 'react';

const Feature = () => {
    const features = [
        {
            name: '1. Connect',
            description:
                'Connect your online store, import your products, then send us your inventory.',
            img: 'https://i.ibb.co/PY1fVv2/connect.png',
        },
        {
            name: '2. Store',
            description:
                'We store your inventory in a combination of our fulfillment centers.',
            img: 'https://i.ibb.co/GW93mpw/store.png',
            
        },
        {
            name: '3 .Ship',
            description:
                'As soon as a customer places an order, we ship it from the nearest fulfillment center.',
            img: 'https://i.ibb.co/B3sWN4W/ship.png',
        }
    ]
    return (
        <div className="py-12 bg-gray-200 rounded-xl">
                <div className="max-w-7xl px-4 md:px-6 lg:px-8">
                    <div  className=''>
                        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className=" text-center">
                                <div className='flex justify-center'>
                                    <div className="w-52">
                                        <img src={feature.img} alt="" />
                                    </div>
                                </div>
                                <p className="my-2 text-lg leading-6 text-sky-700 font-medium">{feature.name}</p>
                                <p className="text-base text-gray-500">{feature.description}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Feature;