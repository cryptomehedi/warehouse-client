import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        axios.get('testimonial.json')
        .then(data => setTestimonials(data.data))
    },[])
    return (
        <div>
            <h2 className='font-semibold text-center text-4xl my-6'>Testimonials</h2>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                    testimonials.map(testimonial => <div>
                        <div class=" py-4 md:py-2">
                            <div class="container mx-auto px-4">
                                <div class  ="md:flex md:flex-wrap md:-mx-4 mb-4">
                                    <div class="md:w-full md:px-4 mt-6 md:mt-0">
                                        <div class="rounded-2xl p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                                            <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                                                <img src={testimonial.img} alt="profile_image" class="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p class="text-gray-600">"{testimonial.text}"</p>
                                                <div class="text-gray-900 font-semibold uppercase mt-6">{testimonial.author}</div>
                                                <div class="text-gray-600">Rating: {testimonial.rating}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Testimonial;