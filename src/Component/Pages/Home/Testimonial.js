import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

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
                    testimonials.map(testimonial => <div key={testimonial.id}>
                        <div className=" py-4 md:py-2">
                            <div className="container mx-auto px-4">
                                <div class  ="md:flex md:flex-wrap md:-mx-4 mb-4">
                                    <div className="md:w-full md:px-4 mt-6 md:mt-0">
                                        <div className="rounded-2xl p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                                                <img src={testimonial.img} alt="profile_image" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-gray-600">"{testimonial.text}"</p>
                                                <div className="text-gray-900 font-semibold uppercase mt-6">{testimonial.author}</div>
                                                <Rating
                                                    initialRating={testimonial.rating}
                                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                                    fullSymbol={<FontAwesomeIcon style={{color: 'gold'}} icon={faStar} />}
                                                    readonly
                                                ></Rating>
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